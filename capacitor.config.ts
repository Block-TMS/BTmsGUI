import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'BTMs',
  webDir: 'dist/btms-gui',
  server: {
    androidScheme: 'https'
  }
};

export default config;
