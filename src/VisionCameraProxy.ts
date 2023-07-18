import { Frame } from './Frame';
import { installFrameProcessorBindings } from './NativeCameraModule';

type BasicParameterType = string | number | boolean | undefined;
type ParameterType = BasicParameterType | BasicParameterType[] | Record<string, BasicParameterType | undefined>;
type FrameProcessor = (frame: Frame, parameters?: Record<string, ParameterType | undefined>) => unknown;
type TFrameProcessorPlugins = Record<string, FrameProcessor>;

interface TVisionCameraProxy {
  setFrameProcessor: (handle: number | null, frameProcessor: (frame: Frame) => void) => void;
  unsetFrameProcessor: (handle: number | null) => void;
  FrameProcessorPlugins: TFrameProcessorPlugins;
}

let didInstall = false;

function getVisionCameraProxy(): TVisionCameraProxy {
  console.log('getVisionCameraProxy()...');
  if (!didInstall) {
    console.log('Installing Frame Processor bindings...');
    // Install VisionCamera Frame Processor JSI Bindings and Plugins
    installFrameProcessorBindings();
    didInstall = true;
  }
  // @ts-expect-error global is untyped
  return global.VisionCameraProxy as TVisionCameraProxy;
}

export const VisionCameraProxy = new Proxy({} as TVisionCameraProxy, {
  get: (_, p) => {
    // @ts-expect-error symbol cannot be used to index the object, whatever
    return getVisionCameraProxy()[p];
  },
});
