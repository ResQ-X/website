'use client'
import { useRef } from 'react';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

export function TawkMessenger() {
    const tawkMessengerRef = useRef();
    return (
        <div className="App">
            <TawkMessengerReact
                propertyId="662590be1ec1082f04e54b94"
                widgetId="1hs1bqqvc"
                useRef={tawkMessengerRef}
            />
        </div>
    );
}




