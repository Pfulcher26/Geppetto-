import sendRequest from "./send-request";

const BASE_URL = '/api/puppets'

export function createPuppet(puppet) {
    return sendRequest(`${BASE_URL}/create`, 'POST', puppet);
}