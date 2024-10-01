// Build a string of debug ad params to be passed in the ad request.
function buildAdRequestDebugParams(opt_adGroupId) {
  var params = [];
  if (opt_adGroupId) {
    params.push('disable_cat2_mixer_caching=true');
    params.push('disable_budget_throttling=true');
    params.push('use_budget_filtering=false');
    params.push('disable_all_experiments');
    // Classify request as WIFI to ensure that mobile emulated requests receive
    // IN_READ classification (which is necessary for DV3/RTB serving)
    params.push('net=wi');
    params.push('adgroups=' + opt_adGroupId);
    params.push('retrieve_only');
  }

  // var debugExperimentId = getParameterByName('debug_experiment_id');
  // if (debugExperimentId && debugExperimentId.length > 0) {
  //   params.push('debug_experiment_id=' + encodeURIComponent(debugExperimentId));
  // }

  return params.join('&');
}
