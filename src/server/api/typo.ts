import type { IncomingMessage } from 'http'
import { parse } from 'url'

import config from '#config'

export default async (req: IncomingMessage) => {
  if (req['url'] !== undefined) {
    const query = parse(req['url'], true).query;

    return await $fetch(`${config.TYPO_BE_URL}`,{
      params: {
        input: query.input
      },
      headers: {
        'X-Token-Req': `${config.TOKEN_REQUEST}`
      }
    });
  }
}