
import LC from '../public/LC-thumb.png';
import MapleImage from '../public/MAPLE-thumb.png';
import BostonVoterImage from '../public/BV-thumb.png';
import WordWyrm from '../public/WW-thumb.png';

export const caseStudies = [
    {
        id: 1,
        title: 'MAPLE 3.0',
        slug: 'maple',
        description: 'desc',
        image: MapleImage,
    },

    {
        id: 2,
        title: 'MAPLE 3.0',
        slug: 'bv',
        description: 'desc',
        image: BostonVoterImage,
    },

    {
        id: 3,
        title: 'La Colaborativa',
        slug: 'lc',
        description: 'desc',
        image: LC,
    },

    {
        id: 4,
        title: 'Word Wyrm',
        slug: 'ww',
        description: 'desc',
        image: WordWyrm,
    },
];

export function getCaseStudyBySlug(slug: string) {
    return caseStudies.find(study => study.slug === slug);
}