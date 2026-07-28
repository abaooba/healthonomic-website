# Assets to download from live WP before cutover

## Patient forms — RESOLVED, `assets/forms/` is now committed
These 14 files are tracked in this repo and are **not** downloadable from the
live site (the whole `/wp-content/uploads/` tree is gone). They must be carried
forward by hand on any re-export — a collector that only walks WordPress media
will silently drop them again, which is exactly how they went missing.

- chair-exercises.pdf + icon-chair.png
- healthy-meals.pdf + icon-meals.png
- blood-sugar-log.pdf + icon-bloodsugar.png
- behavioral-resources.pdf + icon-behavioral.png
- sun-safety.pdf + icon-sun.png
- blood-pressure-log.pdf + icon-bloodpressure.png
- daily-medication-log.pdf + icon-medication.png

Do not put them in Git LFS — a host that doesn't fetch LFS objects would serve
pointer text instead of PDFs and reproduce the original bug.

(The Patient Registration Form was removed from the page per request — do not
re-add it or its icon.)

## Uploads
Save each into assets/uploads/ with the same filename:

- https://healthonomic.com/wp-content/uploads/june-summerheat-blog.png
- https://healthonomic.com/wp-content/uploads/may-26-newsletter-banner.png
- https://healthonomic.com/wp-content/uploads/april-26-blog.png
- https://healthonomic.com/wp-content/uploads/Healthonomic_Habit_Tracker_NoCarbPair-1.pdf
- https://healthonomic.com/wp-content/uploads/march-blog-26.png
- https://healthonomic.com/wp-content/uploads/feb-26-blog.png
- https://healthonomic.com/wp-content/uploads/Heart-Health-Intuition-Checklist.pdf
- https://healthonomic.com/wp-content/uploads/Gemini_Generated_Image_bbl2subbl2subbl2-e1767987362998.png
- https://healthonomic.com/wp-content/uploads/stay-warm-during-winter.webp
- https://healthonomic.com/wp-content/uploads/soda.webp
- https://healthonomic.com/wp-content/uploads/mobile-scrolling.webp
- https://healthonomic.com/wp-content/uploads/sunscreen.webp
- https://healthonomic.com/wp-content/uploads/doctor-with-patient.webp
- https://healthonomic.com/wp-content/uploads/blood-pressure-monitoring.webp
- https://healthonomic.com/wp-content/uploads/health-checking.webp
- https://healthonomic.com/wp-content/uploads/ProteinBarsIllinois.jpeg
- https://healthonomic.com/wp-content/uploads/2.jpeg
- https://healthonomic.com/wp-content/uploads/AdobeStock_241983905-1024x683.jpeg
- https://healthonomic.com/wp-content/uploads/AdobeStock_229735927-1024x479.jpeg
- https://healthonomic.com/wp-content/uploads/AdobeStock_249748393-1024x683.jpeg
- https://healthonomic.com/wp-content/uploads/AdobeStock_79730894-1536x1019.jpeg
- https://healthonomic.com/wp-content/uploads/AdobeStock_252194497-1536x1024.jpeg
- https://healthonomic.com/wp-content/uploads/image1-1536x1024.jpeg
- https://healthonomic.com/wp-content/uploads/AdobeStock_282610448-1536x1024.jpeg
- https://healthonomic.com/wp-content/uploads/image1-1536x864.jpg
- https://healthonomic.com/wp-content/uploads/AdobeStock_151595164-1024x683.jpeg
- https://healthonomic.com/wp-content/uploads/AdobeStock_302634350-1536x1023.jpeg
- https://healthonomic.com/wp-content/uploads/AdobeStock_290616592-1536x1024.jpeg
- https://healthonomic.com/wp-content/uploads/Health_357702467-1536x1023.jpeg
- https://healthonomic.com/wp-content/uploads/AdobeStock_268288215-1536x1024.jpeg
- https://healthonomic.com/wp-content/uploads/HELTHO-1-1536x772.png
- https://healthonomic.com/wp-content/uploads/AdobeStock_100836078-1536x1024.jpeg
- https://healthonomic.com/wp-content/uploads/AdobeStock_121790612-1536x1192.jpeg
- https://healthonomic.com/wp-content/uploads/AdobeStock_320398572-1536x518.jpeg
