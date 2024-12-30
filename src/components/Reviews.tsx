// components/Reviews.tsx
import { motion } from 'framer-motion'

interface Review {
    id: string;
    author: string;
    rating: number;
    text: string;
    date: string;
}

const reviews: Review[] = [
    {
        id: '1',
        author: 'Juan Pérez',
        rating: 5,
        text: 'Excelente servicio...',
        date: '2024-03-15'
    },
    // Añade más reseñas...
]

export const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'Torisoftt',
    'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '4.8',
        'ratingCount': reviews.length,
        'reviewCount': reviews.length
    },
    'review': reviews.map(review => ({
        '@type': 'Review',
        'reviewRating': {
            '@type': 'Rating',
            'ratingValue': review.rating
        },
        'author': {'@type': 'Person', 'name': review.author},
        'reviewBody': review.text,
        'datePublished': review.date
    }))
}

export default function Reviews() {
    return (
        <section className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review) => (
                        <motion.div
                            key={review.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl"
                        >
                            <div className="flex items-center mb-4">
                                <div className="flex text-accent-red dark:text-accent-yellow">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <span key={i}>★</span>
                                    ))}
                                </div>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">{review.text}</p>
                            <p className="font-medium text-gray-900 dark:text-white">{review.author}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}