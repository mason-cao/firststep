export interface Publication {
  year: number;
  authors: string;
  title: string;
  date?: string;
  url?: string;
}

export const publications: Publication[] = [
  // 2025
  { year: 2025, authors: "Annie Lin and Chloe Lin", title: "One Degree Campaign", date: "January 2025", url: "https://mp.weixin.qq.com/s?__biz=MzUyMDMwMjIwOQ==&mid=2247735687&idx=3&sn=dd05e7eef7795584c6985e918d75e75a" },
  { year: 2025, authors: "Various", title: "Senior Living Home Performances - Art and STEM", date: "December 2024", url: "https://mp.weixin.qq.com/s?__biz=MzUyMDMwMjIwOQ==&mid=2247730910&idx=3&sn=781533f13381279dfa6d4eaccc7ee905" },
  { year: 2025, authors: "Michelle Hu", title: "First Step 2024 Summer Activities Summary", date: "May - August 2024", url: "https://mp.weixin.qq.com/s/NJdZayHL2Rsi0r3mTwxZqg" },
  { year: 2025, authors: "Brady Zhou", title: "Chattahoochee Nature Center Events", date: "June-August 2024", url: "https://mp.weixin.qq.com/s/Nkycn4cGeoNkqCqHWVfhAg" },
  { year: 2025, authors: "Emily Song", title: "Labor Day Team Celebrations, River Forks Park Water Quality Testing, and Hope Elderly Activity Center Performance", date: "August 2024", url: "https://mp.weixin.qq.com/s/FHR8vuR-V8DRQyKmxMXoYA" },
  { year: 2025, authors: "Emily Song", title: "Summer Speech Training Sessions With Harvard Debate Camp Coach", date: "August 2024", url: "https://mp.weixin.qq.com/s/RaQB1FUoyMcMgfZydNvf7g" },
  { year: 2025, authors: "Dennis Xu", title: "First Step Fundraising Lemonade/Bake Sale", date: "August 2024", url: "https://mp.weixin.qq.com/s/c81WQ9e5G0H1VsL_BTdl2Q" },
  { year: 2025, authors: "Luke Xu", title: "First Step Community Music Service Event", date: "July 2024", url: "https://mp.weixin.qq.com/s/kNwA0EviCwThPRe4vwFzZw" },
  { year: 2025, authors: "Michelle Hu", title: "First Step Summer Clean Up Activities", date: "June 2024", url: "https://mp.weixin.qq.com/s/L5gmYzTDGbWXq5LhHdLcrQ" },
  { year: 2025, authors: "Wei Lin and Michelle Huang", title: "First Step West Bank Park Team Building and Trash Cleanup", date: "June 2024", url: "https://mp.weixin.qq.com/s?__biz=MzUyMDMwMjIwOQ==&mid=2247719270&idx=4&sn=b17d1b1ea09c9fe32c7f85368a35ed7f" },
  { year: 2025, authors: "Emily Song", title: "Memorial Day West Bank Park Cleanup", date: "May 2024", url: "https://mp.weixin.qq.com/s/B42y-LjyzqBRpD8nQngMMA" },
  { year: 2025, authors: "Mathew Jiang", title: "First Step 2024 Sims Lake Park Cleanup / Easter Celebration", date: "April 2024", url: "https://mp.weixin.qq.com/s/4ct_-GhpZkIFriXBdOTq_Q" },
  { year: 2025, authors: "Wei Lin", title: "Annie Lin Selected as 2024 Bank of America Student Leader", date: "March 2024", url: "https://mp.weixin.qq.com/s?__biz=MzUyMDMwMjIwOQ==&mid=2247710950&idx=4&sn=48e0e33172e4e381c17c7df33d357eef" },
  { year: 2025, authors: "Annie Lin, Chloe Lin, and Wei Lin", title: "First Step Team Rings Christmas Bells, Raises $3934.36 for Local Charity", date: "February 2025", url: "https://mp.weixin.qq.com/s?__biz=MzUyMDMwMjIwOQ==&mid=2247703970&idx=3&sn=ac1cc2d4e67922418d869fe239204d00" },
  { year: 2025, authors: "Annie Lin, Chloe Lin, and Wei Lin", title: "A Thank-You Letter to First Step from The Salvation Army", date: "February 2025", url: "https://mp.weixin.qq.com/s/8DRWE6QmmPDeqgsphWeZmA" },
  // 2024
  { year: 2024, authors: "Annie Lin (interviewed by Emily Webb)", title: "Eco Kids: Heroes for Our Planet", url: "https://www.atlantaparent.com/eco-kids-heroes-for-our-planet/", date: "April 2024" },
  // 2023
  { year: 2023, authors: "Emily Song and Hongming Xue", title: "First Step Team at Sino-USA Next Generation Charity Dinner", date: "October 2023", url: "https://bbs.atlanta711.com/forum.php?mod=viewthread&tid=1420" },
  { year: 2023, authors: "Michelle Hu", title: "First Step Team Lake Lanier Shore Sweep 2023", date: "September 2023", url: "https://bbs.atlanta711.com/forum.php?mod=viewthread&tid=1434" },
  { year: 2023, authors: "Emily Song and Hongming Xue", title: "First Step Team Labor Day Camping", date: "September 2023", url: "https://mp.weixin.qq.com/s?__biz=MzUyMDMwMjIwOQ==&mid=2247675557&idx=4&sn=7b63e44b03df386fbf705de7e2494f13" },
  { year: 2023, authors: "Michelle Hu", title: "First Step Summer Team Building and Trash Cleanup", date: "August 2023", url: "https://bbs.atlanta711.com/forum.php?mod=viewthread&tid=1093&extra=page%3D1" },
  { year: 2023, authors: "Anna Hu and Michelle Hu", title: "Trash Sounder", date: "July 2023", url: "https://bbs.atlanta711.com/forum.php?mod=viewthread&tid=1038" },
  { year: 2023, authors: "Annie Lin and Chloe Lin", title: "First Step Team's Third Year at CFF 5k Walk", date: "June 2023", url: "https://bbs.atlanta711.com/forum.php?mod=viewthread&tid=1015" },
  { year: 2023, authors: "Michelle Hu", title: "First Step Team Chattahoochee River Cleanup", date: "May 2023", url: "https://bbs.atlanta711.com/forum.php?mod=viewthread&tid=1010" },
  { year: 2023, authors: "Rachel Li", title: "First Step Team Volunteers at Lunar New Year Celebrations", date: "February 2023", url: "https://bbs.atlanta711.com/forum.php?mod=viewthread&tid=983" },
  // 2022
  { year: 2022, authors: "Michelle Huang", title: "Being a River Guardian", date: "November 2022", url: "https://bbs.atlanta711.com/forum.php?mod=viewthread&tid=924&pid=1632&page=1&extra=page%3D1#pid1632" },
  { year: 2022, authors: "Annie Lin", title: "Conserve Energy with Our 1 Degree Campaign", date: "October 2022", url: "https://bbs.atlanta711.com/forum.php?mod=viewthread&tid=987" },
  { year: 2022, authors: "Bella Zhang", title: "Team Building and Clean-Up at Lake Lanier's West Bank Park", date: "September 2022", url: "https://bbs.atlanta711.com/forum.php?mod=viewthread&tid=765" },
  { year: 2022, authors: "Annie Lin and Chloe Lin", title: "Want to improve your well being and make friends? Volunteer!", date: "July 2022", url: "https://bbs.atlanta711.com/forum.php?mod=viewthread&tid=752" },
  { year: 2022, authors: "Claire Jing", title: "First Step Fund-Raising: Great Strides | Cystic Fibrosis Foundation", date: "June 2022", url: "https://bbs.atlanta711.com/forum.php?mod=viewthread&tid=564" },
  { year: 2022, authors: "Michelle Hu", title: "First Step Team Food Bank Service", date: "May 2022", url: "https://bbs.atlanta711.com/forum.php?mod=viewthread&tid=561" },
  { year: 2022, authors: "Chloe Lin", title: "Unforgettable Service Experience", date: "March 2022", url: "https://bbs.atlanta711.com/forum.php?mod=viewthread&tid=463" },
  { year: 2022, authors: "Annie Lin and Chloe Lin", title: "2021: First Step Team's Amazing Year of Growth", date: "January 2022", url: "https://bbs.atlanta711.com/forum.php?mod=viewthread&tid=462" },
  // 2021
  { year: 2021, authors: "Annie Lin and Chloe Lin", title: "First Step Team Continues the 130 year Tradition, The Salvation Army Christmas Bell Ringing", date: "December 2021", url: "https://bbs.atlanta711.com/forum.php?mod=viewthread&tid=307&extra=page%3D1" },
  { year: 2021, authors: "Rachel Li", title: "The first time as a volunteer in Lake Lanier Shore Sweep 2021", date: "October 2021", url: "https://bbs.atlanta711.com/forum.php?mod=viewthread&tid=292&extra=page%3D1" },
  { year: 2021, authors: "Helen Chen, Annie Lin, Karen Yan, and Estelle Shen", title: "A Letter from Us to Parents", date: "September 2021", url: "https://bbs.atlanta711.com/forum.php?mod=viewthread&tid=263&extra=page%3D1" },
  { year: 2021, authors: "Annie Lin and Chloe Lin", title: "An Unforgettable Summer on the Georgia Coast", date: "August 2021", url: "https://bbs.atlanta711.com/forum.php?mod=viewthread&tid=233" },
  { year: 2021, authors: "Annie Lin and Michelle Huang", title: "First Step CFF 5k Walk Fundraising", date: "May 2021", url: "https://bbs.atlanta711.com/forum.php?mod=viewthread&tid=193&extra=page%3D1" },
  { year: 2021, authors: "Jeremy Wu", title: "A Special Mother's Day by Lake Lanier", date: "May 2021", url: "https://mp.weixin.qq.com/s?__biz=MzUyMDMwMjIwOQ==&mid=2247662482&idx=3&sn=3295efc90806c32f1ae5121db7916203" },
  { year: 2021, authors: "Nancy Wang", title: "Introducing the First Step Team", date: "February 2021", url: "https://bbs.atlanta711.com/forum.php?mod=viewthread&tid=36" },
];

export const presentations = [
  { title: "First Step Introduction to Next Generation", date: "September 2024", authors: "Michelle Hu and Emily Song" },
  { title: "Parent Information Session", date: "February 2024", authors: "Michelle Huang and Yun Zhang" },
  { title: "Leadership Team End of Year Meeting", date: "December 2023" },
  { title: "Speech before CFF 5k Walk", date: "May 2023", authors: "Annie Lin" },
  { title: "Introduction to other chapters, Shine A Light Meeting", date: "February 2023", authors: "Annie Lin" },
  { title: "IHSSIC Competition 2022", date: "2022", url: "https://youtu.be/ifsHcGNTS6I" },
];
