import {createClient} from 'next-sanity'
import ImageUrlBuilder  from '@sanity/image-url'

export const client = createClient({
    projectId:"0yvn3v70",
    dataset:"production",
    apiVersion:"2022-03-25",
    useCdn: true,
});

const builder = ImageUrlBuilder(client)

export function urlFor(source: any) {
    return builder.image(source);
}
