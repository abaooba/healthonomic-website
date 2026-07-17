/* Healthonomic Primary Care — blog catalogue.
 * Pulled from https://healthonomic.com/blog/ (newest → oldest).
 * `image` and `body` are filled in progressively as each full article is copied down.
 *   image: featured-image URL (used for the card thumbnail + article banner)
 *   body : full article HTML (rendered inside .ho-article)
 * Until an article's body is copied in, the card shows its excerpt and the
 * article page links out to the live post.
 */
(function () {
  var POSTS = [
    { slug: 'summer-heat-chronic-conditions',
      title: 'You\u2019re Doing Everything Right This Summer. So Why Does Your Body Feel Worse?',
      date: 'June 24, 2026',
      excerpt: '\u201CMore Good Days, Together\u201D \u2014 Mental Health America 2026, Summer Edition. That summer fatigue, dizziness, and shortness of breath? It\u2019s not just the heat. Heat affects blood sugar, blood pressure, lungs, and medications more than most people realize \u2014 here\u2019s what to watch for this summer in Cook County.',
      image: null, body: null },

    { slug: 'mental-health-affects-your-physical-health',
      title: 'Your Mind Is Talking to Your Body \u2013 Are You Listening?',
      date: 'April 30, 2026',
      excerpt: 'How mental health affects your overall wellbeing, what the physical signs look like, and how your primary care team at Healthonomic can help \u2014 this Mental Health Awareness Month and beyond.',
      image: null, body: null },

    { slug: 'outdoor-movement-most-underrated-health-tools',
      title: 'Why Outdoor Movement Is One of the Most Underrated Health Tools',
      date: 'March 17, 2026',
      excerpt: 'Discover why regular outdoor walking supports heart health, blood sugar, stress, and sleep. One of the most evidence-supported and sustainable interventions is also the simplest: regular outdoor movement.',
      image: null, body: null },

    { slug: 'the-gut-kidney-connection',
      title: 'The Gut-Kidney Connection: 3 Simple Habits for Internal Health',
      date: 'March 4, 2026',
      excerpt: 'National Nutrition Month. Most of us don\u2019t spend much time thinking about our gut and kidneys until something goes wrong \u2014 but these two systems are in constant communication. Here are three simple habits to support both.',
      image: null, body: null },

    { slug: '5-ways-to-love-your-heart-that-involve-going-outside-more',
      title: '5 Ways to Love Your Heart That Involve Going Outside More',
      date: 'February 13, 2026',
      excerpt: 'Simple, enjoyable habits for heart wellness this American Heart Month and beyond. At Healthonomic, we believe your body is designed to move \u2014 and heart-healthy living doesn\u2019t have to feel daunting.',
      image: null, body: null },

    { slug: 'getting-back-on-track-after-the-holidays-and-post-holiday-stress',
      title: 'Getting Back on Track After the Holidays | Post-Holiday Stress',
      date: 'January 10, 2026',
      excerpt: 'A simple reset for long-term wellness. Between late nights, indulgent meals, packed schedules, and added stress, many people find themselves asking the same question once the season winds down.',
      image: null, body: null },

    { slug: 'holiday-health-tips-gratitude-stress-management-telemedicine-support',
      title: 'Holiday Health Tips: Gratitude, Stress Management & Telemedicine Support',
      date: 'December 12, 2025',
      excerpt: 'As the holidays approach \u2014 a time for gratitude, connection, and focusing on well-being \u2014 the team at Healthonomic Primary Care shares tips on gratitude, stress management, and telemedicine support.',
      image: null, body: null },

    { slug: 'the-role-of-technology-in-managing-chronic-conditions',
      title: 'The Role of Technology in Managing Chronic Conditions',
      date: 'November 10, 2025',
      excerpt: 'Managing chronic conditions can feel overwhelming, but recent advances make it easier than ever. Mobile health apps, remote monitoring, and telehealth simplify tracking your health and staying connected with your care team.',
      image: null, body: null },

    { slug: 'how-much-soda-is-too-much-for-your-blood-sugar',
      title: 'How Much Soda Is Too Much for Your Blood Sugar?',
      date: 'September 25, 2025',
      excerpt: 'Exploring the impact of sugary drinks on your health. While soda isn\u2019t the sole culprit behind blood sugar spikes, its high sugar content can contribute significantly to fluctuations in glucose levels.',
      image: null, body: null },

    { slug: 'top-uv-safety-tips-how-to-protect-your-skin-and-eyes-from-harmful-summer-sun',
      title: 'Top UV Safety Tips: How to Protect Your Skin and Eyes from Harmful Summer Sun',
      date: 'July 11, 2025',
      excerpt: 'Summer is synonymous with outdoor fun, but it also brings increased exposure to harmful ultraviolet (UV) radiation. This guide provides actionable UV safety tips to keep you safe while enjoying the sunshine.',
      image: null, body: null },

    { slug: 'prostate-cancer-risks-diagnosis-treatment-and-prevention',
      title: 'Prostate Cancer: Risks, Diagnosis, Treatment, and Prevention',
      date: 'June 15, 2025',
      excerpt: 'Prostate health tips from Dr. Lentzou. Prostate cancer remains one of the most common cancers for men worldwide \u2014 understanding the risks, treatments, and prognosis can help you take charge of your health.',
      image: null, body: null },

    { slug: 'why-preventive-care-is-essential-for-your-health-key-tips-for-disease-prevention-and-healthier-living',
      title: 'Why Preventive Care Is Essential for Your Health: Key Tips for Disease Prevention and Healthier Living',
      date: 'May 8, 2025',
      excerpt: 'Preventive care is the cornerstone of modern healthcare, essential for avoiding illness and long-term complications. Annual wellness check-ups, routine screenings, and vaccinations empower better health.',
      image: null, body: null },

    { slug: 'easy-ways-to-track-and-improve-your-personal-health-metrics-for-better-wellness',
      title: 'How to Easily Track and Improve Your Personal Health Metrics for Better Wellness',
      date: 'April 14, 2025',
      excerpt: 'Maintaining good health isn\u2019t just about feeling great \u2014 it\u2019s about proactive steps to monitor and improve your overall well-being. Here are five practical ways to track and improve your personal health metrics.',
      image: null, body: null },

    { slug: '8-healthy-foods-that-are-actually-bad-for-you',
      title: 'How to Identify 8 \u201CHealthy\u201D Foods That Might Actually Be Bad for You',
      date: 'August 26, 2022',
      excerpt: 'When choosing foods for a healthier diet, it\u2019s important to actually look at the ingredients and nutrients. It\u2019s easy to be fooled by foods that come off as nutritious when in reality they could do more harm than good.',
      image: null, body: null },

    { slug: '9-tips-for-a-healthy-morning-routine',
      title: 'How to Build a Healthy Morning Routine with These 9 Simple Tips',
      date: 'June 15, 2022',
      excerpt: 'Your morning routine can set the tone for the rest of your day. If your morning starts off wrong, chances are your day will follow \u2014 but a disciplined routine can change everything.',
      image: null, body: null },

    { slug: 'how-to-build-healthy-sleep-habits-and-improve-your-sleep-naturally',
      title: 'How to Build Healthy Sleep Habits and Improve Your Sleep Naturally',
      date: 'April 13, 2022',
      excerpt: 'If you\u2019re struggling with restlessness or poor sleep, building healthy sleep habits can transform your nights and your energy levels \u2014 essential for mental and physical wellness.',
      image: null, body: null },

    { slug: 'how-to-stay-on-top-of-your-health-at-any-age',
      title: 'Aging Gracefully: Tips on How to Stay on Top of Your Health at Any Age',
      date: 'February 3, 2022',
      excerpt: 'As we grow older, it\u2019s crucial to ask how we can maintain a healthy lifestyle. By focusing on healthier habits, we don\u2019t have to worry as much about chronic disease or mental decline.',
      image: null, body: null },

    { slug: 'be-proactive-about-your-health',
      title: 'Stay Ahead with Preventative Care & Annual Wellness Exams: How to Be Proactive About Your Health',
      date: 'December 14, 2021',
      excerpt: 'Waiting until something goes wrong is not the most proactive approach to health. As primary care physicians, Healthonomic encourages people to keep their health at the forefront, not just during uncertain times.',
      image: null, body: null },

    { slug: 'guide-for-healthy-eating-habit-development',
      title: 'The Go-To Guide for Healthy Eating Habit Development',
      date: 'October 15, 2021',
      excerpt: 'Many of the \u201Cdelicious\u201D foods we indulge in have become processed or fast foods \u2014 among the unhealthiest for us. Here\u2019s how to develop healthy, balanced eating habits.',
      image: null, body: null },

    { slug: '8-simple-ways-to-keep-cool-while-exercising-in-the-heat',
      title: '8 Simple Ways to Keep Cool While Exercising in the Heat',
      date: 'August 6, 2021',
      excerpt: 'With record-breaking temperatures, people are advised to stay safe in the heat while going out or exercising. Here are eight simple ways to keep cool during your workout.',
      image: null, body: null },

    { slug: 'how-to-stay-on-top-of-your-health-while-working-a-desk-job',
      title: 'How to Stay on Top of Your Health While Working a Desk Job',
      date: 'June 9, 2021',
      excerpt: 'Sitting behind a desk all day is second nature for millions of working Americans \u2014 and it can take a toll on your health. Here\u2019s how to adopt habits that keep you well at the office.',
      image: null, body: null },

    { slug: 'the-7-best-exercises-to-tackle-and-ease-stress',
      title: 'The 7 Best Exercises to Tackle and Ease Stress',
      date: 'April 9, 2021',
      excerpt: 'Everyone deals with stress, some more than others. For many, exercise is one of the best ways to relieve it. Here are seven of the best exercises to tackle and ease stress.',
      image: null, body: null },

    { slug: 'plant-based-diets-recipes',
      title: 'Let\u2019s Take a Look at Plant-Based Diets and Recipes!',
      date: 'February 15, 2021',
      excerpt: 'Plant-based foods may seem like a trend, but they\u2019re here to stay. A big concern for most people: how do I get enough protein? Here\u2019s a look at plant-based diets and recipes.',
      image: null, body: null },

    { slug: '1780-2',
      title: 'Health & The Holidays: 6 Fit & Festive Tips!',
      date: 'December 24, 2020',
      excerpt: 'Health and fitness are some of the last words we associate with the holidays. Holiday treats and cold weather aren\u2019t a recipe for success \u2014 here are six fit and festive tips.',
      image: null, body: null },

    { slug: 'healthy-lung-month-tips-for-easy-lifetime-breathing',
      title: 'Healthy Lung Month: Tips For Easy Lifetime Breathing',
      date: 'October 7, 2020',
      excerpt: 'Take a deep breath. Notice the air flowing through your airway and resting in your lungs. This Healthy Lung Month, here are tips for easy, lifetime breathing.',
      image: null, body: null },

    { slug: 'the-complexities-of-the-immune-system',
      title: 'The Complexities of the Immune System and How to Boost It',
      date: 'August 14, 2020',
      excerpt: 'Health is a primary concern for every family. This year especially focused us all on health \u2014 here\u2019s a look at the complexities of the immune system and how to boost it.',
      image: null, body: null },

    { slug: 'heart-health-exploring-your-heart-and-the-electrocardiogram',
      title: 'Heart Health: Exploring Your Heart and the Electrocardiogram',
      date: 'June 8, 2020',
      excerpt: 'Heart disease is the leading cause of death for men and women in this country. Primary care plays a vital role \u2014 here\u2019s a look at your heart and the electrocardiogram (EKG).',
      image: null, body: null },

    { slug: 'five-lifestyle-changes-to-help-with-high-blood-pressure',
      title: 'Five Lifestyle Changes to Help With High Blood Pressure',
      date: 'April 14, 2020',
      excerpt: 'About 103 million Americans are at risk for heart attacks and strokes. There are often common lifestyle patterns behind high blood pressure \u2014 here are five changes that help.',
      image: null, body: null },

    { slug: 'health-and-wellness-tips-for-2020',
      title: 'Health and Wellness Tips for 2020',
      date: 'February 12, 2020',
      excerpt: 'A new decade brings a new outlook on your life \u2014 and your health. You don\u2019t have to become vegan overnight; some of the smallest changes make the biggest difference.',
      image: null, body: null },

    { slug: 'obesity-in-america-a-growing-concern',
      title: 'Obesity in America: A Growing Concern',
      date: 'January 2, 2020',
      excerpt: 'Only 13% of U.S. adults were obese in the 1960s and \u201970s. By today\u2019s standard the number has risen drastically. A look at obesity in America and what we can do about it.',
      image: null, body: null },

    { slug: 'why-you-should-consider-converting-to-a-vegan-lifestyle',
      title: 'Why You Should Consider Converting to a Vegan Lifestyle',
      date: 'November 14, 2019',
      excerpt: 'Converting to a vegan lifestyle is one of the hardest challenges anyone can take. As children we\u2019re accustomed to meat, dairy, and grains \u2014 here\u2019s why it may be worth considering.',
      image: null, body: null }
  ];

  window.HO_BLOG_POSTS = POSTS;
  try { window.dispatchEvent(new Event('ho-blog-ready')); } catch (e) {}
})();
