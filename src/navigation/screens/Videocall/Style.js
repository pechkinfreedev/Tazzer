import ConnectyCube from "react-native-connectycube";


const CREDENTIALS = {
    appId: 21,
    authKey: "qXCRjGtsdDsS5LF",
    authSecret: "fFvTfU2HqjOhp3Y",
  };

const storedSession = localStorage.getItem("ConnectyCube:session");
const session = JSON.parse(storedSession);

ConnectyCube.setSession(session);

const CONFIG = {
    debug: { mode: 1 }, // enable DEBUG mode (mode 0 is logs off, mode 1 -> console.log())
  };
  ConnectyCube.init(CREDENTIALS, CONFIG);

  const DEFAULT_CONFIG = {
    endpoints: {
      api: 'api.connectycube.com',
      chat: 'chat.connectycube.com'
    },
    hash: 'sha1', // 'sha1' or 'sha256'
    chatProtocol: {
      bosh: 'https://chat.connectycube.com:5281',
      websocket: 'wss://chat.connectycube.com:5291',
      active: 2 // 1 - BOSH, 2 - WEBSOCKET
    },
    webSession: {
      getSessionTimeInterval: 3,
      getSessionTimeout: 120
    },
    chat: {
      contactList: {
        subscriptionMode: {
          mutual: true
        }
      },
      reconnectionTimeInterval: 5,
      streamManagement: {
        enable: false
      },
      ping: {
        enable: false,
        timeInterval: 60
      }
    },
    videochat: {
      alwaysRelayCalls: false,
      answerTimeInterval: 60,
      dialingTimeInterval: 5,
      disconnectTimeInterval: 30,
      statsReportTimeInterval: false,
      iceServers: [
        {
          urls: 'stun:stun.l.google.com:19302'
        },
        {
          urls: 'stun:turn.connectycube.com'
        },
        {
          urls: 'turn:turn.connectycube.com:5349?transport=udp',
          username: 'connectycube',
          credential: '4c29501ca9207b7fb9c4b4b6b04faeb1'
        },
        {
          urls: 'turn:turn.connectycube.com:5349?transport=tcp',
          username: 'connectycube',
          credential: '4c29501ca9207b7fb9c4b4b6b04faeb1'
        }
      ]
    },
    conference: { server: 'wss://janus.connectycube.com:8989' },
    on: {
      sessionExpired: null, // (size) => { count(size) }
      xmppDataWrite: null, // (size) => { count(size) }
      xmppDataRead: null // (size) => { count(size) }
    },
    timeout: null, // request's timeout
    debug: { mode: 0 }
  }
  
  