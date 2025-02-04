/* eslint-disable no-unused-vars, no-var */

var config = {
    // Connection
    hosts: {
        domain: 'localhost',
        muc: 'muc.localhost',
        focus: 'focus.localhost',
    },
    bosh: '//localhost/http-bind',
    websocket: 'wss://localhost/xmpp-websocket',

    // Authentication
    enableUserRolesBasedOnToken: true,
    enableAuth: true,
    enableGuests: true,

    // Moderator features
    enableLobby: true,
    enableLobbyChat: true,
    noticeMessage: 'Please wait for a moderator to let you in',
    enableAudioLevels: true,

    // Participant controls
    prejoinPageEnabled: true,
    disableRemoteMute: false,
    startWithAudioMuted: true,
    startWithVideoMuted: true,

    // Moderator controls
    remoteVideoMenu: {
        disableKick: false,
        disableGrantModerator: false,
        disablePrivateChat: false
    },

    // Recording
    enableRecording: true,
    hiddenDomain: 'recorder.localhost',

    // Interface
    defaultLanguage: 'en',
    enableWelcomePage: true,
    enableClosePage: true,
    disable1On1Mode: false,

    // Video quality
    resolution: 720,
    constraints: {
        video: {
            height: {
                ideal: 720,
                max: 720,
                min: 180
            }
        }
    },

    // Connection quality
    enableLayerSuspension: true,
    channelLastN: 4,

    // Security
    enableInsecureRoomNameWarning: true,
    enableE2EE: true,
    p2p: {
        enabled: true,
        preferH264: true
    }
};
