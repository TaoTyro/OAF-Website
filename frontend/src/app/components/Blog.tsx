import { Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'The Power of Education: How One School is Changing Lives',
    excerpt: 'Education is the cornerstone of breaking the cycle of poverty. In this feature, we explore how our primary education initiative in Uganda has impacted over 500 students.',
    author: 'Sarah Johnson',
    date: 'Dec 20, 2024',
    category: 'Education',
    image: 'https://images.unsplash.com/photo-1427504494785-cdda055acfe8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.0.3&q=80&w=800',
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'Healthcare Access in Rural Africa: Our Latest Initiative',
    excerpt: 'Access to basic healthcare remains a challenge for many children. Learn how our new mobile clinic is bringing medical services to underserved communities.',
    author: 'James Mutua',
    date: 'Dec 15, 2024',
    category: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1576091160550-112173e7f1bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.0.3&q=80&w=800',
    readTime: '7 min read'
  },
  {
    id: 3,
    title: 'Climate Action for a Sustainable Future',
    excerpt: 'Environmental degradation affects vulnerable communities the most. Discover our sustainable climate solutions program and how it\'s creating green jobs.',
    author: 'Amara Okafor',
    date: 'Dec 10, 2024',
    category: 'Environment',
    image: 'https://images.unsplash.com/photo-1559027615-cd2628902d4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.0.3&q=80&w=800',
    readTime: '6 min read'
  },
  {
    id: 4,
    title: 'Empowering Girls Through Social Justice Programs',
    excerpt: 'Girls\' rights matter. Our social justice advocacy program is working to end child marriage and ensure every girl has access to quality education.',
    author: 'David Chen',
    date: 'Dec 5, 2024',
    category: 'Social Justice',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.0.3&q=80&w=800',
    readTime: '8 min read'
  },
  {
    id: 5,
    title: 'Community Stories: How Partnerships Are Changing Lives',
    excerpt: 'Effective change requires partnerships. Meet the organizations and individuals working alongside us to create lasting impact in African communities.',
    author: 'Sarah Johnson',
    date: 'Nov 28, 2024',
    category: 'Community',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.0.3&q=80&w=800',
    readTime: '6 min read'
  },
  {
    id: 6,
    title: 'Year-End Impact Report: 2024 Achievements',
    excerpt: 'As the year comes to a close, we reflect on our accomplishments. From schools built to lives changed, here\'s what we achieved together.',
    author: 'Amara Okafor',
    date: 'Nov 20, 2024',
    category: 'Updates',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.0.3&q=80&w=800',
    readTime: '9 min read'
  }
];

const categories = ['All', 'Education', 'Healthcare', 'Environment', 'Social Justice', 'Community', 'Updates'];

export function Blog() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8  bg-gradient-to-t from-blue-100 to-yellow-100 dark:from-gray-900 dark:to-gray-800" id="blog">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '2.5rem', color: 'var(--primary-blue)' }} className="font-bold">
            Latest News & Stories
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Updates and insights from our work on the ground
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                category === 'All'
                  ? 'text-white'
                  : 'bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800'
              }`}
              style={{
                backgroundColor: category === 'All' ? 'var(--primary-blue)' : undefined,
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="aspect-video md:aspect-auto overflow-hidden">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="mb-4">
                  <span
                    className="text-sm font-bold px-3 py-1 rounded-full"
                    style={{ backgroundColor: 'var(--primary-blue)', color: 'white' }}
                  >
                    Featured
                  </span>
                </div>
                <h3
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                  className="text-2xl font-bold mb-3 dark:text-amber-50"
                >
                  {blogPosts[0].title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                    {blogPosts[0].date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400" />
                    {blogPosts[0].author}
                  </div>
                  <span>{blogPosts[0].readTime}</span>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 font-medium transition-opacity hover:opacity-70 w-fit"
                  style={{ color: 'var(--primary-blue)' }}
                >
                  Read Full Article
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <div
              key={post.id}
              className="bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <span
                  className="text-xs font-bold px-2 py-1 rounded-full"
                  style={{ backgroundColor: 'var(--primary-orange)', color: 'white' }}
                >
                  {post.category}
                </span>

                <h3
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                  className="font-bold text-lg mt-3 mb-2 dark:text-amber-50 line-clamp-2"
                >
                  {post.title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-3 text-xs text-gray-600 dark:text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                    {post.date}
                  </div>
                  <span>{post.readTime}</span>
                </div>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
                  style={{ color: 'var(--primary-blue)' }}
                >
                  Read More
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium transition-all hover:opacity-90"
            style={{ backgroundColor: 'var(--primary-blue)' }}
          >
            View All Articles
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
