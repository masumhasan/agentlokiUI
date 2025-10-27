export interface AppConfig {
  pageTitle: string;
  pageDescription: string;
  companyName: string;

  supportsChatInput: boolean;
  supportsVideoInput: boolean;
  supportsScreenShare: boolean;
  isPreConnectBufferEnabled: boolean;

  logo: string;
  startButtonText: string;
  accent?: string;
  logoDark?: string;
  accentDark?: string;

  // for LiveKit Cloud Sandbox
  sandboxId?: string;
  agentName?: string;
}

export const APP_CONFIG_DEFAULTS: AppConfig = {
  companyName: 'GameGhor',
  pageTitle: 'AgentLoki Masum\'s Personal Assistant',
  pageDescription: 'Personal assistant of Nur Hasan Masum',

  supportsChatInput: true,
  supportsVideoInput: true,
  supportsScreenShare: true,
  isPreConnectBufferEnabled: true,

  logo: '/icon.gif',
  accent: '#002cf2',
  logoDark: '/icon.gif',
  accentDark: '#1fd5f9',
  startButtonText: 'Lets Talk',

  // for LiveKit Cloud Sandbox
  sandboxId: undefined,
  agentName: undefined,
};
