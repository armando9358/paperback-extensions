import {
    ContentRating,
    SourceInfo,
    SourceIntents
} from '@paperback/types'

import {
    getExportVersion,
    Madara
} from '../Madara'

import { MangaCultivatorParser } from './MangaCultivatorParser'

const DOMAIN = 'https://mangacultivator.com'

export const MangaCultivatorInfo: SourceInfo = {
    version: getExportVersion('0.0.1'),
    name: 'MangaCultivator',
    description: `Extension that pulls manga from ${DOMAIN}`,
    author: 'Community',
    authorWebsite: '-',
    icon: 'icon.png',
    contentRating: ContentRating.EVERYONE,
    websiteBaseURL: DOMAIN,
    sourceTags: [],
    intents: SourceIntents.MANGA_CHAPTERS | SourceIntents.HOMEPAGE_SECTIONS | SourceIntents.CLOUDFLARE_BYPASS_REQUIRED | SourceIntents.SETTINGS_UI
}

export class MangaCultivator extends Madara {

    baseUrl: string = DOMAIN

    override alternativeChapterAjaxEndpoint = true

    override hasAdvancedSearchPage = true

    override usePostIds = false

    override chapterDetailsSelector = '#chapter-protector-data'

    override parser: MangaCultivatorParser = new MangaCultivatorParser()
}