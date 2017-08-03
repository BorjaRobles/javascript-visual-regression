import assert from 'assert';

export function assertDiff(results) {
  results.forEach((result) => {
    assert.ok(
      result.isWithinMisMatchTolerance,
      `Images are not the same (mismatch percentage: ${result.misMatchPercentage})`
    );
  });
}