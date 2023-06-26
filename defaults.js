export const defaultEndpointConfig = {
  gpuIds: "AMPERE_16",
  idleTimeout: 5,
  locations: null,
  name: "generated endpoint",
  networkVolumeId: null,
  scalerType: "QUEUE_DELAY",
  scalerValue: 4,
  workersMax: 1,
  workersMin: 0,
}
export const defaultTemplateConfig = {
  advancedStart: undefined,
  containerDiskInGb: 30,
  dockerArgs: "",
  env: [],
  isPublic: false,
  isServerless: true,
  name: "generated template",
  ports: "",
  readme: "",
  startJupyter: false,
  startSsh: false,
  volumeInGb: 0,
  volumeMountPath: "",
}
