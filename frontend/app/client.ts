import {createThirdwebClient} from 'thirdweb';

const clientID=process.env.NEXT_PUBLIC_CLIENT_ID;

if(!clientID){
    throw Error('Client ID not found');
}

export const client = createThirdwebClient({
    clientId:clientID,
});