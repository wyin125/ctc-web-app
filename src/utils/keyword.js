import fp from "lodash/fp";

export const getMatchingKeywords = (keywords, resumeKeywords) => {
  const getLoweredValue = fp.compose(fp.toLower, fp.get("value"));
  const resumeLoweredValues = fp.map(getLoweredValue, resumeKeywords);
  return keywords.filter((keyword) =>
    resumeLoweredValues.includes(keyword.value.toLowerCase())
  );
};

export const getSimilarKeywords = (keywords, resumeKeywords) => {
  const resumeSkills = fp.map("skill", resumeKeywords);
  const matchingKeywords = getMatchingKeywords(keywords, resumeKeywords);
  return fp.differenceWith(
    fp.isEqual,
    keywords.filter((keyword) => resumeSkills.includes(keyword.skill)),
    matchingKeywords
  );
};

export const getMissingKeywords = (keywords, resumeKeywords) => {
  const matchingKeywords = getMatchingKeywords(keywords, resumeKeywords);
  const similarKeywords = getSimilarKeywords(keywords, resumeKeywords);
  return fp.differenceWith(fp.isEqual, keywords, [
    ...matchingKeywords,
    ...similarKeywords,
  ]);
};

export const getAutoUpdateConversions = (similarKeywords, resumeKeywords) => {
  return similarKeywords.map((similarKeyword) => {
    const correspondingKeyword = fp.find(
      { skill: similarKeyword.skill },
      resumeKeywords
    );
    return { from: correspondingKeyword.value, to: similarKeyword.value };
  });
};
