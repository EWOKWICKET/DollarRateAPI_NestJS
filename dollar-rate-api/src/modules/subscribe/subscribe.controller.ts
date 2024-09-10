import { Controller, Post } from '@nestjs/common';
import { SubscribeService } from './subscribe.service';

@Controller('subscribe')
export class SubscribeController {
    constructor(private readonly subscribeService: SubscribeService) { }

    @Post()
    subscribe() {}
}
