import { Injectable, OnModuleInit, OnApplicationShutdown } from '@nestjs/common';

@Injectable()
export class DatabaseService implements OnModuleInit, OnApplicationShutdown {
    private isConnected = false;

    onModuleInit() {
        // Called when the module is initialized
        this.isConnected = true;
        console.log("DB CONNECTED");
    }

    onApplicationShutdown(signal: string) {
        // Called when the application is shutting down
        this.isConnected = false;
        console.log(`DB DISCONNECTED DUE TO APP SHUTDOWN signal ${signal}`);
    }

    getStatus() {
        return this.isConnected ? 'Connected with db' : 'Disconnected with db';
    }
}
