import { connect, type NatsConnection } from 'nats.ws';
import type { Handle } from '@sveltejs/kit';

export let natsWS : NatsConnection;
connect({servers: ['ws://localhost:9222']}).then(ws => {
    console.log('Connected to NATS');
    natsWS = ws;
});


export const handle: Handle = async ({ event, resolve }) => {
	console.log(event);
    console.log(resolve);
    console.log(natsWS);

	const response = await resolve(event);
	return response;
};
