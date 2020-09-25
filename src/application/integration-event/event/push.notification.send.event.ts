import { EventType, IntegrationEvent } from './integration.event'
import { PushNotification } from '../../domain/model/push.notification'

export class PushNotificationSendEvent extends IntegrationEvent<PushNotification> {

    public static readonly ROUTING_KEY: string = 'pushes.send'
    public static readonly NAME: string = 'PushNotificationSendEvent'

    constructor(public timestamp?: Date, public push?: PushNotification) {
        super(PushNotificationSendEvent.NAME, EventType.PUSH, timestamp)
    }

    public toJSON(): any {
        if (!this.push) return {}
        return {
            ...super.toJSON(),
            push: this.push.toJSON()
        }
    }
}
