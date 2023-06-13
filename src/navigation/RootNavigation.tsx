import {createNavigationContainerRef} from '@react-navigation/native';

export const navigationRef: any = createNavigationContainerRef();

export const navigate = (name: string, params?: Object) => {
  if (navigationRef.isReady()) {
    if (!params) {
      navigationRef.navigate(name);
    } else {
      navigationRef.navigate(name, params);
    }
  }
};