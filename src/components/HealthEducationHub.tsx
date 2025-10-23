import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Search, 
  Clock, 
  Heart, 
  Brain, 
  Activity, 
  Baby, 
  Stethoscope,
  BookOpen,
  HelpCircle,
  Library,
  ChevronRight
} from 'lucide-react';

interface HealthArticle {
  id: string;
  title: string;
  description: string;
  category: string;
  author: string;
  authorTitle: string;
  readTime: string;
  date: string;
  image: string;
  language?: string;
}

const categories = [
  { id: 'all', name: 'All', icon: BookOpen },
  { id: 'cardiology', name: 'Cardiology', icon: Heart },
  { id: 'nutrition', name: 'Nutrition', icon: Activity },
  { id: 'mental-health', name: 'Mental Health', icon: Brain },
  { id: 'fitness', name: 'Fitness', icon: Activity },
  { id: 'pediatrics', name: 'Pediatrics', icon: Baby },
  { id: 'endocrinology', name: 'Endocrinology', icon: Stethoscope },
];

const healthArticles: HealthArticle[] = [
  {
    id: '1',
    title: 'Understanding Heart Disease: Prevention and Management',
    description: 'Learn about the risk factors, symptoms, and prevention strategies for cardiovascular disease in Nigeria.',
    category: 'cardiology',
    author: 'Dr. Adunni Adesanya',
    authorTitle: 'Heart Health',
    readTime: '5 min read',
    date: 'Dec 15, 2024',
    image: 'https://images.unsplash.com/photo-1666887360742-974c8fce8e6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwZG9jdG9yJTIwY2FyZGlvbG9neXxlbnwxfHx8fDE3NTg1MzU2NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: '2',
    title: 'Nutrition Guide: Building a Healthy Nigerian Diet',
    description: 'Discover how to create balanced meals using local Nigerian foods for optimal health and nutrition.',
    category: 'nutrition',
    author: 'Dr. Fatima Aliyu',
    authorTitle: 'Nutrition',
    readTime: '7 min read',
    date: 'Dec 12, 2024',
    image: 'https://images.unsplash.com/photo-1744116432654-574391dbe3ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwbnV0cml0aW9uJTIwY29sb3JmdWwlMjBmb29kfGVufDF8fHx8MTc1ODUzNTY1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: '3',
    title: 'Mental Health Awareness: Breaking the Stigma',
    description: 'Understanding mental health issues and the importance of seeking professional help in Nigerian society.',
    category: 'mental-health',
    author: 'Dr. Chioma Okeke',
    authorTitle: 'Mental Health',
    readTime: '6 min read',
    date: 'Dec 10, 2024',
    image: 'https://images.unsplash.com/photo-1604881991720-f91add269bed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW50YWwlMjBoZWFsdGglMjBzdXBwb3J0JTIwaGFuZHN8ZW58MXx8fHwxNzU4NTM1NjU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: '4',
    title: 'Exercise and Fitness: Getting Started Safely',
    description: "A beginner's guide to starting a fitness routine that's sustainable and appropriate for Nigerian climate.",
    category: 'fitness',
    author: 'Dr. Emeka Okonkwo',
    authorTitle: 'Exercise',
    readTime: '8 min read',
    date: 'Dec 8, 2024',
    image: 'https://images.unsplash.com/photo-1635863782730-4393246eee1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwZXhlcmNpc2UlMjBhZnJpY2FufGVufDF8fHx8MTc1ODUzNTY2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: '5',
    title: 'Childhood Vaccination: Protecting Our Children',
    description: 'Complete guide to childhood immunizations and their importance for public health in Nigeria.',
    category: 'pediatrics',
    author: 'Dr. Aliha Mohammed',
    authorTitle: 'Vaccination',
    readTime: '4 min read',
    date: 'Dec 5, 2024',
    image: 'https://images.unsplash.com/photo-1576765608622-067973a79f53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWRpYXRyaWNzJTIwY2hpbGRyZW4lMjB2YWNjaW5hdGlvbnxlbnwxfHx8fDE3NTg1MzU2Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: '6',
    title: 'Managing Diabetes: Lifestyle and Treatment',
    description: 'Comprehensive approach to diabetes management with focus on Nigerian dietary and lifestyle habits.',
    category: 'endocrinology',
    author: 'Dr. Musa Ibrahim',
    authorTitle: 'Diabetes',
    readTime: '9 min read',
    date: 'Dec 3, 2024',
    image: 'https://images.unsplash.com/photo-1599814516324-66aa0bf16425?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFiZXRlcyUyMGxpZmVzdHlsZSUyMG1hbmFnZW1lbnR8ZW58MXx8fHwxNzU4NTM1NjczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

const wellnessTips = [
  {
    id: '1',
    title: 'Stay Hydrated in Nigerian Climate',
    tip: 'Drink at least 8-10 glasses of water daily to combat dehydration in our tropical climate.',
    category: 'wellness'
  },
  {
    id: '2',
    title: 'Local Superfoods for Better Health',
    tip: 'Incorporate moringa, bitter leaf, and plantain into your diet for optimal nutrition.',
    category: 'wellness'
  },
  {
    id: '3',
    title: 'Managing Stress in Urban Nigeria',
    tip: 'Practice deep breathing exercises and take regular breaks to manage city stress.',
    category: 'wellness'
  }
];

const faqs = [
  {
    id: '1',
    question: 'How often should I have a health checkup?',
    answer: 'Adults should have annual health checkups, while those with chronic conditions may need more frequent visits.',
    category: 'general'
  },
  {
    id: '2',
    question: 'What vaccinations do children need in Nigeria?',
    answer: 'Children need vaccinations for BCG, polio, DPT, hepatitis B, measles, and yellow fever as per Nigerian immunization schedule.',
    category: 'pediatrics'
  },
  {
    id: '3',
    question: 'When should I seek emergency medical care?',
    answer: 'Seek immediate care for chest pain, difficulty breathing, severe bleeding, head injuries, or signs of stroke.',
    category: 'emergency'
  }
];

const languages = [
  { code: 'en', name: 'English', active: true },
  { code: 'fr', name: 'Français', active: false },
  { code: 'ha', name: 'Hausa', active: false },
  { code: 'ig', name: 'Igbo', active: false },
  { code: 'yo', name: 'Yoruba', active: false },
];

export function HealthEducationHub() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const filteredArticles = healthArticles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-20 bg-gradient-to-b from-white to-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 mb-4 px-4 py-2">
            Health Education
          </Badge>
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">Knowledge for Better Health</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Stay informed with the latest health information, wellness tips, and medical 
            insights from our expert healthcare professionals.
          </p>
        </div>

        {/* Language Selector removed as requested */}

        {/* Tabs */}
        <Tabs defaultValue="blog" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-secondary/50 rounded-lg p-1 mb-8">
            <TabsTrigger value="blog" className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Health Blog
            </TabsTrigger>
            <TabsTrigger value="wellness" className="flex items-center gap-2">
              <Heart className="w-4 h-4" />
              Wellness Tips
            </TabsTrigger>
            <TabsTrigger value="faqs" className="flex items-center gap-2">
              <HelpCircle className="w-4 h-4" />
              FAQs
            </TabsTrigger>
            <TabsTrigger value="resources" className="flex items-center gap-2">
              <Library className="w-4 h-4" />
              Resources
            </TabsTrigger>
          </TabsList>

          {/* Health Blog Tab */}
          <TabsContent value="blog" className="space-y-8">
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search health topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-3 text-lg border-2 border-gray-200 focus:border-primary rounded-lg bg-white"
                />
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map(category => {
                const IconComponent = category.icon;
                return (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 ${
                      selectedCategory === category.id
                        ? 'bg-primary text-white shadow-lg'
                        : 'text-gray-600 border-gray-200 hover:border-primary hover:text-primary'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    {category.name}
                  </Button>
                );
              })}
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map(article => (
                <Card key={article.id} className="hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-white group overflow-hidden">
                  <div className="relative overflow-hidden">
                    <ImageWithFallback
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className={`absolute top-3 left-3 ${
                      article.category === 'cardiology' ? 'bg-red-500' :
                      article.category === 'nutrition' ? 'bg-green-500' :
                      article.category === 'mental-health' ? 'bg-blue-500' :
                      article.category === 'fitness' ? 'bg-purple-500' :
                      article.category === 'pediatrics' ? 'bg-yellow-500' :
                      'bg-gray-500'
                    } text-white capitalize`}>
                      {article.category.replace('-', ' ')}
                    </Badge>
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {article.readTime}
                      </span>
                      <span>{article.date}</span>
                    </div>
                    <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors duration-300">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {article.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                          <Stethoscope className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-900">{article.author}</p>
                          <p className="text-xs text-gray-500">{article.authorTitle}</p>
                        </div>
                      </div>
                      <Button 
                        size="sm" 
                        className="bg-primary hover:bg-primary/90 text-white flex items-center gap-1"
                      >
                        Read More
                        <ChevronRight className="w-3 h-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3">
                Load More Articles
              </Button>
            </div>
          </TabsContent>

          {/* Wellness Tips Tab */}
          <TabsContent value="wellness" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wellnessTips.map(tip => (
                <Card key={tip.id} className="hover:shadow-lg transition-all duration-300 border-0 shadow-md bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <Heart className="w-5 h-5" />
                      {tip.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{tip.tip}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* FAQs Tab */}
          <TabsContent value="faqs" className="space-y-6">
            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map(faq => (
                <Card key={faq.id} className="hover:shadow-lg transition-all duration-300 border-0 shadow-md bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-gray-900">
                      <HelpCircle className="w-5 h-5 text-primary" />
                      {faq.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Resources Tab */}
          <TabsContent value="resources" className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl mb-4 text-gray-900">Health Resources</h3>
              <p className="text-gray-600 mb-8">Additional health resources and educational materials</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="text-center hover:shadow-lg transition-all duration-300 border-0 shadow-md bg-white">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BookOpen className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle>Health Guides</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Comprehensive health guides and brochures</p>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-lg transition-all duration-300 border-0 shadow-md bg-white">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Activity className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle>Exercise Videos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Guided exercise and wellness videos</p>
                  </CardContent>
                </Card>
                <Card className="text-center hover:shadow-lg transition-all duration-300 border-0 shadow-md bg-white">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Stethoscope className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle>Medical Tools</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">BMI calculators and health assessment tools</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}