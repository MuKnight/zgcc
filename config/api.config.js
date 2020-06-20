import { NODE_ENV } from '../environment'

const apisMap = {
    development: {
        FE: 'http://localhost:3000',
        BASE: 'https://ws.zgcheckapi.com/',
        // CDN: '',
        // PROXY: '/proxy',
        // SOCKET: 'https://api.surmon.me',
        // GRAVATAR: '/proxy/static.surmon.me/avatar'
        // BASE: 'https://api.surmon.me',
        // CDN: 'https://cdn.surmon.me',
        // PROXY: 'https://cdn.surmon.me/proxy',
        // SOCKET: 'https://surmon.me',
        // GRAVATAR: 'https://static.surmon.me/avatar'
    },
    production: {
        // FE: 'https://surmon.me',
        // BASE: 'https://api.surmon.me',
        // CDN: 'https://cdn.surmon.me',
        // PROXY: 'https://cdn.surmon.me/proxy',
        // SOCKET: 'https://surmon.me',
        // GRAVATAR: 'https://static.surmon.me/avatar'
    }
}

export default apisMap[NODE_ENV]
