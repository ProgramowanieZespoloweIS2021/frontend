import { ITag } from '@@types/models/Offer';

export const delay = (ms: number): Promise<void> => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

export function resolveEnv(name: string): any {
    return (window as any)?.__env__?.[name] || process.env[name];
}

export const createTagsUrl = (tags: ITag[]) => {
    let tagsUrl = '';
    tags.forEach((tag) => {
        tagsUrl += `${tag.name},`;
    });
    tagsUrl = tagsUrl.slice(0, -1);
    return tagsUrl;
};

/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
export function shuffle(a: any[]) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
