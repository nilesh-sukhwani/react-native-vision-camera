import { NativeModules, Platform } from 'react-native';
import { CameraRuntimeError } from './CameraError';

const supportedPlatforms = ['ios', 'android', 'macos'];

// NativeModules automatically resolves 'CameraView' to 'CameraViewModule'
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
export const CameraModule = NativeModules.CameraView;
if (CameraModule == null) {
  if (!supportedPlatforms.includes(Platform.OS)) {
    throw new CameraRuntimeError(
      'system/camera-module-not-found',
      `Failed to initialize VisionCamera: VisionCamera currently does not work on ${Platform.OS}.`,
    );
  }

  let message = 'Failed to initialize VisionCamera: The native Camera Module (`NativeModules.CameraView`) could not be found.';
  message += '\n* Make sure react-native-vision-camera is correctly autolinked (run `npx react-native config` to verify)';
  if (Platform.OS === 'ios' || Platform.OS === 'macos') message += '\n* Make sure you ran `pod install` in the ios/ directory.';

  if (Platform.OS === 'android') message += '\n* Make sure gradle is synced.';

  // check if Expo
  // @ts-expect-error expo global JSI modules are not typed
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const ExpoConstants = global.expo?.modules?.ExponentConstants;
  if (ExpoConstants != null) {
    if (ExpoConstants.appOwnership === 'expo') {
      // We're running Expo Go
      throw new CameraRuntimeError(
        'system/camera-module-not-found',
        `react-native-vision-camera is not supported in Expo Go! Use EAS/expo prebuild instead (\`expo run:${Platform.OS}\`). For more info, see https://docs.expo.dev/workflow/prebuild/.`,
      );
    } else {
      // We're running Expo bare / standalone
      message += '\n* Make sure you ran `expo prebuild`.';
    }
  }

  message += '\n* Make sure you rebuilt the app.';
  throw new CameraRuntimeError('system/camera-module-not-found', message);
}

export function installFrameProcessorBindings(): void {
  // Check if we are running on-device (JSI)
  // @ts-expect-error JSI functions aren't typed
  if (global.nativeCallSyncHook == null) {
    throw new CameraRuntimeError(
      'system/frame-processors-unavailable',
      'Failed to initialize VisionCamera Frame Processors: React Native is not running on-device. Frame Processors can only be used when synchronous method invocations (JSI) are possible. If you are using a remote debugger (e.g. Chrome), switch to an on-device debugger (e.g. Flipper) instead.',
    );
  }

  const result = CameraModule.installFrameProcessorBindings() as unknown;
  if (result !== true) {
    throw new CameraRuntimeError(
      'system/frame-processors-unavailable',
      'Failed to install Frame Processor bindings! See https://mrousavy.github.io/react-native-vision-camera/docs/guides/troubleshooting',
    );
  }
}
