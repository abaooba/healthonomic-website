/* Healthonomic blog — full article bodies, keyed by slug.
 *   image: featured-image URL (card thumbnail + article banner)
 *   body : full article HTML (rendered inside .ho-article)
 * Appended progressively, newest first. New entries go directly above the
 * /*__APPEND__* / marker so the file stays easy to extend.
 * Internal links use the in-app hash routes (#/service/..., #/locations, …);
 * booking + external citations open on their real sites.
 */
(function () {
  window.HO_BLOG_BODIES = window.HO_BLOG_BODIES || {};
  var B = window.HO_BLOG_BODIES;
  var CTA = 'background:#eef3fb;border-left:4px solid #2351A3;padding:16px 20px;margin:0 0 24px;border-radius:0 4px 4px 0;';
  var WARN = 'background:#fff7ed;border-left:4px solid #e0883a;padding:16px 20px;margin:0 0 22px;border-radius:0 4px 4px 0;font-size:15px;';
  var EMRG = 'background:#fdecec;border-left:4px solid #d9534f;padding:16px 20px;margin:0 0 22px;border-radius:0 4px 4px 0;font-size:15px;';
  var INFO = 'background:#f4f7fb;border:1px solid #e3e9f2;padding:16px 20px;margin:0 0 22px;border-radius:4px;';
  var SRC = 'font-size:13.5px;color:#9aa3af;margin:-6px 0 22px;';
  var DISC = 'font-size:13px;color:#9aa3af;line-height:1.7;border-top:1px solid #eee;margin-top:34px;padding-top:20px;';

  B['summer-heat-chronic-conditions'] = {
    image: '/assets/uploads/june-summerheat-blog.png',
    body: `
<p style="font-style:italic;color:#5278B1;font-size:18px;margin:0 0 22px;">&ldquo;More Good Days, Together&rdquo; &ndash; Mental Health America 2026 | Summer Edition</p>
<h2>That Summer Fatigue, Dizziness, and Shortness of Breath? It&rsquo;s Not Just the Heat.</h2>
<p><em>Heat affects blood sugar, blood pressure, lungs, and medications more than most people realize. Here&rsquo;s what the science says and what to watch for this summer in Cook County.</em></p>
<p>You&rsquo;re drinking more water. You&rsquo;re being careful about what you eat. You&rsquo;re staying consistent with your medications. And yet, something feels off. You&rsquo;re more tired than you expected. Your numbers are fluctuating. Your breathing feels heavier. Your energy crashes earlier in the day.</p>
<p>Summer heat is quietly doing something to your body that most people don&rsquo;t realize until they&rsquo;re sitting in an exam room, wondering why their chronic condition feels harder to manage than usual. And for patients living with diabetes, high blood pressure, heart disease, COPD, or asthma, the effect is even more significant.</p>
<p>At Healthonomic Primary Care, we see this pattern every June across our Cook County locations in Orland Park, Evergreen Park, and Palos Heights. This blog is our way of getting ahead of it with you before summer gets harder than it needs to be.</p>
<div style="${CTA}"><strong>Not sure if your symptoms are heat-related or something else?</strong> Your Healthonomic provider can evaluate what&rsquo;s going on; same-day appointments are available. <a href="https://livewell.aah.org/chart/Authentication/Login" target="_blank" rel="noopener">Book an appointment &rarr;</a></div>
<h2>What Summer Actually Does to Your Body</h2>
<p>Before we get into specific conditions, let&rsquo;s understand what&rsquo;s happening at the basic level when temperatures climb.</p>
<p>In the heat, your body&rsquo;s top priority shifts to keeping itself cool. Blood vessels near the skin dilate to release heat. Your heart pumps harder and faster. You sweat more, losing fluid and electrolytes. Your kidneys work overtime. Hormones that regulate stress, hunger, and fluid balance are all affected.</p>
<p>For a body that isn&rsquo;t managing any underlying health conditions, this system handles it reasonably well. But for a body that&rsquo;s also managing diabetes, hypertension, heart disease, or a respiratory condition, the added workload of summer heat creates real physiological ripple effects that show up in your numbers, your energy, and your symptoms.</p>
<p>Here&rsquo;s where it gets specific.</p>
<h2>How Summer Heat Affects Diabetes</h2>
<p>If you&rsquo;re managing diabetes, summer is one of the most important seasons to stay close to your care team, and here&rsquo;s exactly why.</p>
<h3>Blood Sugar Becomes Harder to Predict</h3>
<p>High temperatures can change how your body uses insulin. Even when it doesn&rsquo;t seem very hot outside, the combination of heat and humidity can be dangerous. This is because heat affects how quickly insulin is absorbed into the bloodstream, and not always in a predictable direction.</p>
<p>Heat can dilate blood vessels, which speeds up insulin absorption, potentially causing blood sugar to drop too low, especially if you are physically active on hot days. At the same time, sunburn and dehydration, both more common in summer, can cause blood sugar to rise.</p>
<p>People with diabetes get dehydrated more quickly than others. Not drinking enough liquids raises blood sugar, and high blood sugar makes you urinate more, causing further dehydration, a difficult cycle that can escalate quickly in the heat.</p>
<h3>Summer Disrupts Your Routine, Which Disrupts Your Management</h3>
<p>Kids out of school, vacations, get-togethers, family reunions, and the summer season can throw off your routine, and possibly your diabetes management plan. Skipped meals, changed meal times, different levels of activity, and disrupted sleep patterns all affect blood sugar stability in ways that can add up over weeks.</p>
<h3>Medications and Supplies Are Heat-Sensitive Too</h3>
<p>Insulin and certain diabetes supplies can be damaged by heat. Storing medications improperly in a hot car, a hot bag, or a non-climate-controlled space can affect their effectiveness, something many patients don&rsquo;t think about until it&rsquo;s too late.</p>
<p><strong>What to discuss with your Healthonomic provider:</strong></p>
<ul>
<li>Whether your monitoring frequency should increase during the summer months</li>
<li>How to adjust your routine around summer schedule changes</li>
<li>Safe storage for your medications and supplies in warm weather</li>
</ul>
<div style="${WARN}"><strong>&#9888;&#65039; Important:</strong> The information above is general and educational. Blood sugar targets, insulin adjustments, and summer management strategies must be individualized by your healthcare provider. Never adjust your medication or insulin without speaking to your provider first.</div>
<p style="${SRC}"><em>Sources: <a href="https://www.cdc.gov/diabetes/articles/managing-diabetes-in-the-heat.html" target="_blank" rel="noopener">CDC &ndash; Managing Diabetes in the Heat</a> | <a href="https://health.clevelandclinic.org/how-to-manage-your-diabetes-in-extreme-summer-heat" target="_blank" rel="noopener">Cleveland Clinic</a> | <a href="https://www.healthline.com/health/diabetes/diabetes-and-heat" target="_blank" rel="noopener">Healthline</a></em></p>
<div style="${CTA}"><strong>Managing diabetes in Cook County?</strong> Healthonomic offers comprehensive diabetes management at all three locations. <a href="#/service/diabetes">Explore our Diabetes Management services &rarr;</a></div>
<h2>How Summer Heat Affects Blood Pressure</h2>
<p>The relationship between heat and blood pressure is one of the most misunderstood dynamics in summer health, and getting it wrong can be dangerous.</p>
<h3>Heat Generally Lowers Blood Pressure, But That Isn&rsquo;t Always Safe</h3>
<p>Here&rsquo;s something that surprises many patients: blood pressure tends to be lower in summer than in winter because warmer temperatures cause blood vessels to dilate, so your body doesn&rsquo;t have to work as hard to circulate blood.</p>
<p>So does that mean summer is easier on your blood pressure? Not necessarily, and here&rsquo;s where it gets important.</p>
<h3>When You&rsquo;re on Blood Pressure Medication, Heat Changes the Equation</h3>
<p>Medications and heat can interact, leading to potentially severe side effects. Commonly prescribed medications that increase the risk from heat include diuretics, anticholinergic agents, and some cardiovascular medications.</p>
<p>Heat-related vasodilation can significantly enhance the blood pressure-lowering effects of cardiovascular drugs, which might result in blood pressure dropping too low, potentially causing fainting with serious injury risk.</p>
<p>Diuretics, commonly prescribed for patients with hypertension or heart failure, can worsen the effects of heat by inducing dehydration and electrolyte imbalance.</p>
<p>In plain terms: if your blood pressure medication is working well in cooler months, the added dilating effect of summer heat may cause your pressure to drop lower than intended. Dizziness, lightheadedness, and fainting in the heat are warning signs that deserve a conversation with your provider, not just a glass of water.</p>
<h3>Some Patients Experience the Opposite, Blood Pressure Spikes</h3>
<p>Dehydration, heat-triggered stress hormones, and disrupted sleep from the heat can cause blood pressure instability in some patients. If you notice your readings fluctuating more than usual this summer, up or down, that&rsquo;s worth flagging at your next visit.</p>
<div style="${WARN}"><strong>&#9888;&#65039; Important:</strong> Do not stop or adjust your blood pressure medication based on summer readings without speaking to your healthcare provider first. Blood pressure management is highly individualized, and changes must be made under clinical guidance.</div>
<p style="${SRC}"><em>Sources: <a href="https://www.cdc.gov/heat-health/hcp/clinical-guidance/heat-and-medications-guidance-for-clinicians.html" target="_blank" rel="noopener">CDC &ndash; Heat and Medications</a> | <a href="https://www.escardio.org/Journals/E-Journal-of-Cardiology-Practice/Volume-22/climate-change-and-cardiovascular-disease-the-impact-of-heat-and-heat-health-a" target="_blank" rel="noopener">European Society of Cardiology</a></em></p>
<div style="${CTA}"><strong>Managing blood pressure?</strong> Talk to your Healthonomic provider about how your summer routine and medications are interacting. <a href="#/service/blood-pressure">Learn about our Blood Pressure services &rarr;</a></div>
<h2>How Summer Heat Affects Your Heart</h2>
<p>For patients with heart disease, summer isn&rsquo;t just about comfort; it&rsquo;s about risk management.</p>
<p>Heat can worsen cardiovascular disease. Hot days can also worsen air quality, and breathing polluted air can increase the risk of heart attacks, strokes, arrhythmias, and worsen heart failure. Exposure to increased concentrations of fine particulate matter for hours to weeks can trigger cardiac events.</p>
<p>Your heart works harder in the heat to pump blood to the skin&rsquo;s surface for cooling. For a heart already working harder than it should be due to disease, this added workload matters. The combination of heat, dehydration, air quality, and medication interactions creates a uniquely demanding environment for the cardiovascular system in the summer months.</p>
<p>The CDC recommends that patients with cardiovascular disease check the HeatRisk forecast every day during warm months and take protective action when the risk is orange or higher, and also check the Air Quality Index daily, taking protective action when it exceeds 100.</p>
<div style="${EMRG}"><strong>&#9888;&#65039; Emergency warning:</strong> If you experience chest pain, difficulty breathing, sudden dizziness, or any other symptoms of a cardiac event, call 911 immediately. Do not wait to see if it passes. Do not drive yourself. These symptoms in the heat require immediate emergency evaluation.</div>
<p style="${SRC}"><em>Source: <a href="https://www.cdc.gov/heat-health/hcp/clinical-overview/heat-and-people-with-cardiovascular-disease.html" target="_blank" rel="noopener">CDC &ndash; Heat and Cardiovascular Disease</a></em></p>
<div style="${CTA}"><strong>Managing heart health in the suburbs of Chicago?</strong> Healthonomic monitors and manages heart disease at all three Cook County locations. <a href="#/service/heart-disease">Learn about our Heart Disease services &rarr;</a></div>
<h2>How Summer Heat Affects COPD and Asthma</h2>
<p>If you have COPD or asthma, summer in the Midwest presents a specific combination of challenges, and 2026 is shaping up to be a particularly demanding season.</p>
<h3>For COPD Patients</h3>
<p>Rising temperatures and humidity can prompt COPD flare-ups. Humid air is dense and contains a higher concentration of water vapor, which makes it more challenging to breathe. Hot temperatures require the body to work harder to stay cool, and that added strain makes breathing symptoms worse, especially during heat waves.</p>
<p>During hot weather, pollutants like ozone and fine particles can become trapped near the ground, creating smog, which can irritate the lungs. For someone with COPD, this can trigger a serious flare-up that requires medical attention.</p>
<p>Dehydration can cause mucus to thicken, which makes breathing more difficult, another reason that summer hydration is especially critical for patients with respiratory conditions.</p>
<p><strong>Warning signs of a COPD flare-up that need medical attention:</strong> Increased shortness of breath, as well as increased coughing and sputum. If you notice any of these symptoms and don&rsquo;t know what to do, or if your symptoms are getting worse, call your doctor. If you can&rsquo;t reach your doctor, go to the hospital emergency department.</p>
<h3>For Asthma Patients</h3>
<p>Heat, humidity, and sudden weather changes can trigger heat-induced asthma symptoms by causing airways to narrow and trapping pollutants and allergens. Environmental factors like air pollution, high ozone levels, and smoke from wildfires or outdoor activities exacerbate asthma symptoms during warmer months.</p>
<p>Breathing air with unhealthy ozone levels for as little as one day can trigger asthma attacks. For patients in Cook County, the Chicago area&rsquo;s urban heat island effect means ozone levels during summer can be particularly elevated on hot, still days.</p>
<div style="${WARN}"><strong>&#9888;&#65039; Important:</strong> Never adjust or stop your inhaler use, COPD rescue pack, or respiratory medications without speaking to your provider. If you are experiencing severe shortness of breath, call 911 immediately.</div>
<p style="${SRC}"><em>Sources: <a href="https://www.medscape.com/viewarticle/summer-heat-and-copd-managing-respiratory-risks-rising-2025a1000ba6" target="_blank" rel="noopener">Medscape</a> | <a href="https://www.cdc.gov/heat-health/hcp/clinical-overview/heat-children-asthma.html" target="_blank" rel="noopener">CDC &ndash; Heat and Asthma</a> | <a href="https://allergyasthmanetwork.org/news/summer-asthma-and-warm-weather/" target="_blank" rel="noopener">Allergy &amp; Asthma Network</a></em></p>
<div style="${CTA}"><strong>Managing COPD or asthma in Orland Park or Evergreen Park?</strong> Your Healthonomic provider can help you create a summer action plan. <a href="#/services">Learn about our COPD &amp; Asthma services &rarr;</a></div>
<h2>Warning Signs: When to Stop and Call Your Doctor or 911</h2>
<p>This summer, pay attention to signs that your body is struggling with the heat, especially if you&rsquo;re managing a chronic condition. Here are the signals that need action:</p>
<p><strong>Call your Healthonomic provider if you notice:</strong></p>
<ul>
<li>Blood sugar readings that are consistently higher or lower than your usual target range</li>
<li>Blood pressure readings that are significantly different from your baseline, high or low</li>
<li>More fatigue than usual that rest doesn&rsquo;t resolve</li>
<li>Increased shortness of breath or breathing difficulty</li>
<li>Dizziness or lightheadedness when standing or moving</li>
<li>Unusual changes in urination, swelling in the legs, or persistent headaches</li>
<li>Symptoms that feel like your chronic condition is getting worse despite no change in your routine</li>
</ul>
<p><strong>Call 911 immediately if you or someone nearby experiences:</strong></p>
<ul>
<li>Sudden chest pain, pressure, or tightness</li>
<li>Difficulty breathing that is severe or comes on suddenly</li>
<li>Confusion, disorientation, or loss of consciousness</li>
<li>Seizures</li>
<li>Hot, dry skin with no sweating despite extreme heat &ndash; this is a sign of heat stroke, a life-threatening emergency</li>
</ul>
<div style="${EMRG}"><strong>&#9888;&#65039;</strong> If in doubt, always err on the side of caution. Call 911 or go to your nearest emergency room. Heat-related emergencies can progress rapidly.</div>
<h2>Practical Summer Steps, With Your Provider&rsquo;s Guidance</h2>
<p>These general strategies are broadly supported by the CDC, Mayo Clinic, and major health organizations. <strong>Always discuss any changes with your Healthonomic provider first, particularly if you have a chronic condition, as individual recommendations vary.</strong></p>
<ol>
<li><strong>Hydrate strategically, not just more.</strong> If your urine is yellow, you&rsquo;re already one to two liters behind. Aim for clear to pale yellow as your daily target. For patients on diuretics or with kidney or heart conditions, discuss your specific daily fluid target with your provider; it may be different from the general guidance.</li>
<li><strong>Know your heat index, not just the temperature.</strong> Even when it doesn&rsquo;t seem very hot outside, the combination of heat and humidity can be dangerous. Check the heat index and air quality index daily at weather.gov. When the heat index is above 90&deg;F or the AQI exceeds 100, plan accordingly.</li>
<li><strong>Time outdoor activity carefully.</strong> Avoid the sun as much as possible between 10:30am and 2pm, when heat exhaustion risk is highest. Exercise in the early morning or evening when temperatures are lower. Always consult your provider before starting or intensifying any exercise routine, especially in summer.</li>
<li><strong>Keep your medications out of the heat.</strong> Many medications, including insulin, inhalers, and certain cardiovascular drugs, can be damaged by high temperatures. Never leave them in a hot car. Store them according to the manufacturer&rsquo;s instructions and ask your pharmacist if you&rsquo;re unsure.</li>
<li><strong>Monitor your numbers more closely.</strong> Summer is the season to increase your monitoring frequency &ndash; blood sugar, blood pressure, and how your breathing feels. Track changes and bring the data to your next appointment. Patterns you spot early are much easier to address than ones that have been building for weeks.</li>
<li><strong>Create a summer care plan with your provider.</strong> The most important thing on this list. A proactive summer check-in with your Healthonomic provider, before your numbers change, is far easier than reactive management after they do.</li>
</ol>
<div style="${CTA}"><strong>Ready to build your summer care plan?</strong> Our team in Orland Park, Evergreen Park, and Palos Heights is here for you. Same-day appointments available. <a href="https://livewell.aah.org/chart/Authentication/Login" target="_blank" rel="noopener">Schedule a wellness visit today &rarr;</a></div>
<h2>Frequently Asked Questions</h2>
<p><strong>Q: Does summer heat raise or lower blood sugar?</strong><br>Heat can affect blood sugar in both directions, depending on the individual, level of activity, medications used, and hydration status. Heat speeds up insulin absorption, which can lower blood sugar, but dehydration and sunburn can raise it. This is why the CDC recommends that people with diabetes monitor blood sugar more often in summer and stay in close contact with their care team. Never adjust your medication without speaking to your provider.</p>
<p><strong>Q: Can heat cause blood pressure to drop dangerously low?</strong><br>Yes, particularly for patients taking blood pressure medication. Heat-related vasodilation can significantly enhance the blood pressure-lowering effects of cardiovascular drugs, potentially causing blood pressure to drop too low and resulting in dizziness or fainting. If you feel lightheaded in the heat and take blood pressure medication, contact your provider. Do not stop your medication without medical guidance.</p>
<p><strong>Q: Why does my COPD feel worse in summer?</strong><br>Humid air is dense and contains more water vapor, making it harder to breathe. Hot temperatures also require the body to work harder to stay cool, adding strain to the respiratory system. High ozone and air pollution levels, which peak on hot summer days, compound the problem. Discuss a summer COPD action plan with your provider before symptoms worsen.</p>
<p><strong>Q: Can my medications react badly with the heat?</strong><br>Yes. Certain medications &ndash; including diuretics, anticholinergic agents, and some cardiovascular and psychotropic medications &ndash; can increase the risk of heat-related illness or interact with heat in ways that affect their effectiveness or safety. Bring a full medication list to your next appointment and ask your provider specifically about summer interactions.</p>
<p><strong>Q: How do I know if it&rsquo;s heat exhaustion or my chronic condition?</strong><br>The symptoms can overlap, which is exactly why this matters. Signs of heat exhaustion include heavy sweating; cold, pale, clammy skin; a fast, weak pulse; nausea; and dizziness. If you have a chronic condition and experience any of these in summer, contact your provider or seek care &ndash; don&rsquo;t wait to see if it resolves. Heat exhaustion can progress to heat stroke, a life-threatening emergency requiring 911.</p>
<p><strong>Q: Should I see my primary care doctor before summer to prepare?</strong><br>Yes. A proactive summer visit lets your provider review your medications for heat interactions, adjust monitoring frequency if needed, discuss your activity plans safely, and create a summer action plan specific to your conditions. Your Healthonomic provider is available for same-day appointments across Cook County, no referral needed.</p>
<h2>We&rsquo;re Here All Summer. So Are Your Health Goals.</h2>
<p>At Healthonomic Primary Care, we believe summer shouldn&rsquo;t mean a pause in your health management; it means a seasonal reset with the right support. Whether you&rsquo;re managing diabetes, blood pressure, heart disease, COPD, or simply want to check in before the heat peaks, our team of physicians and nurse practitioners across Orland Park, Evergreen Park, and Palos Heights is here for you.</p>
<p>Same-day appointments. Extended hours. Whole-person, patient-first care.</p>
<ul>
<li><a href="https://livewell.aah.org/chart/Authentication/Login" target="_blank" rel="noopener">Book an appointment online</a></li>
<li><a href="#/service/diabetes">Diabetes Management services</a></li>
<li><a href="#/service/blood-pressure">Blood Pressure services</a></li>
<li><a href="#/service/heart-disease">Heart Disease services</a></li>
<li><a href="#/service/primary-care">Primary Care</a></li>
<li><a href="#/service/check-ups">Wellness Check-Ups</a></li>
<li><a href="#/locations">Find a location &ndash; Orland Park, Evergreen Park, Palos Heights</a></li>
</ul>
<p><strong>Call us:</strong> General line: <a href="tel:7086711500">708-671-1500</a> | Orland Park: <a href="tel:7086961311">708-696-1311</a></p>
<p style="${DISC}">This blog post is intended for general educational and informational purposes only. It does not constitute medical advice, diagnosis, or treatment. All statistical data is sourced from publicly available, peer-reviewed, or government health publications. All health decisions, including any changes to medications, monitoring frequency, activity level, or care routines, must be made in consultation with your qualified healthcare provider. If you are experiencing a medical emergency, call 911. &copy; 2026 Healthonomic Primary Care. All rights reserved. Orland Park | Evergreen Park | Palos Heights, IL.</p>`
  };

  B['mental-health-affects-your-physical-health'] = {
    image: '/assets/uploads/may-26-newsletter-banner.png',
    body: `
<p><em>How mental health affects your overall wellbeing, what the physical signs look like, and how your primary care team at Healthonomic can help &ndash; this Mental Health Awareness Month and beyond.</em></p>
<p style="font-size:14px;color:#9aa3af;">Published: May 2026 | Mental Health Awareness Month 2026 | Serving: Orland Park, Evergreen Park &amp; Palos Heights, IL | Reading time: ~8 minutes</p>
<div style="${INFO}"><strong>Mental Health America &ndash; 2026 Theme:</strong> <em>&ldquo;More Good Days, Together&rdquo;</em><br><strong>NAMI &ndash; 2026 Theme:</strong> <em>&ldquo;Stigma Grows in Silence&rdquo;</em></div>
<p>May is Mental Health Awareness Month &ndash; and in 2026, two powerful themes are guiding the national conversation. Mental Health America invites us to reflect on what a &ldquo;good day&rdquo; really looks like and work together to create more of them. NAMI reminds us that stigma grows in silence &ndash; and that when we speak our truths, we create space for healing, connection, and hope for others.</p>
<p>At Healthonomic Primary Care &ndash; serving Orland Park, Evergreen Park, and Palos Heights across Cook County &ndash; we see the full picture of our patients&rsquo; health every day. And one truth becomes clearer with every visit: what happens in your mind does not stay in your mind. Stress, anxiety, depression, and untreated emotional struggles leave real, measurable marks on your heart, your blood sugar, your immune system, your sleep, and your energy. Your mind and body are not separate systems. They are one whole.</p>
<p>Whether you&rsquo;ve been feeling &ldquo;off&rdquo; for months without explanation, or you&rsquo;re managing a chronic condition and wondering why it feels harder than it should, this blog is for you.</p>
<div style="${CTA}"><strong>Not sure where to start with your mental health?</strong> Your Healthonomic primary care provider can help. No referral needed. <a href="https://livewell.aah.org/chart/Authentication/Login" target="_blank" rel="noopener">Book an appointment &rarr;</a></div>
<h2>The Numbers Don&rsquo;t Lie: Mental Health in America Right Now</h2>
<p>If you&rsquo;ve been quietly struggling, here&rsquo;s the most important thing to know first: you are far from alone.</p>
<ul>
<li><strong>1 in 5</strong> U.S. adults has been diagnosed with a depression disorder by a healthcare provider.</li>
<li><strong>1 in 8</strong> U.S. adults regularly experience feelings of worry, nervousness, and anxiety.</li>
<li><strong>58M+</strong> American adults had a clinical mental illness in 2023, the most recent national survey year.</li>
<li><strong>Only 1 in 7</strong> U.S. adults received counseling or therapy from a mental health professional in the past year.</li>
</ul>
<p>The gap between people who need support and those who get it remains wide &ndash; and stigma is a major reason why. As NAMI&rsquo;s 2026 theme puts it: stigma grows in silence. Breaking that silence starts with conversations like this one &ndash; and with primary care providers across Cook County who are screening for mental health, not just physical symptoms.</p>
<div style="${INFO}"><strong>Did you know?</strong> More than half of Americans believe primary care doctors should screen for anxiety and depression &ndash; yet many never bring it up at their own visit. Your Healthonomic provider is ready to listen. <a href="https://livewell.aah.org/chart/Authentication/Login" target="_blank" rel="noopener">Book an appointment today &rarr;</a></div>
<h2>The Mind-Body Connection: How Mental Health Affects Your Physical Health</h2>
<p>Many people don&rsquo;t realize until they&rsquo;re sitting in an exam room that chronic stress and untreated mental health conditions trigger real, biological responses &ndash; and those responses add up over time.</p>
<p>When you&rsquo;re under persistent stress or anxiety, the brain activates the body&rsquo;s &ldquo;fight or flight&rdquo; response. Cortisol surges. Your heart beats faster. Blood pressure rises. Inflammation builds. In short bursts, this is healthy and protective. But when it&rsquo;s chronically activated by ongoing stress, depression, or unresolved trauma, it begins to cause damage across nearly every system in the body. The CDC confirms that mental health is closely linked to physical health &ndash; and that the relationship runs in both directions.</p>
<h3>Mental Health and Your Heart</h3>
<p>The link between depression and cardiovascular disease is one of the most well-documented connections in all of medicine. Research has suggested that depression deserves recognition as a cardiovascular risk factor alongside diabetes, high blood pressure, and smoking.</p>
<p>Studies show that up to 40% of heart disease patients meet the criteria for major depressive disorder, and 20&ndash;30% may have elevated depressive symptoms. Physiologically, chronic stress elevates cortisol, raises blood pressure, reduces blood flow to the heart, and drives systemic inflammation &ndash; all of which damage cardiovascular tissue over time. A 2023 Johns Hopkins study found that young adults who reported several days of feeling low had a stronger statistical link to cardiovascular disease &ndash; a finding that should resonate for anyone who dismisses persistent low mood as &ldquo;just stress.&rdquo;</p>
<div style="${CTA}"><strong>Managing heart health in Cook County?</strong> Healthonomic offers heart disease monitoring and management at all three locations. <a href="#/service/heart-disease">Learn about our Heart Disease services &rarr;</a></div>
<h3>Mental Health and Diabetes</h3>
<p>If you&rsquo;re managing diabetes, your mental health is part of your diabetes management &ndash; full stop. Research involving over one million patients with type 2 diabetes found a significantly higher risk of both non-fatal and fatal cardiovascular events in those who also had depression.</p>
<p>One study found that type 2 diabetes and depression each individually raised the 7-year heart attack risk by 30% &ndash; but for patients living with <em>both</em> conditions, that risk jumped to 82%. The CDC also estimates that within any 18-month period, one-third to half of people with diabetes experience some form of diabetes-related distress.</p>
<div style="${INFO}"><strong>Worth knowing:</strong> The CDC estimates that 25&ndash;50% of people with diabetes who experience depression never receive a depression diagnosis &ndash; meaning many people are suffering unnecessarily when effective support is available.</div>
<div style="${CTA}"><strong>Managing diabetes?</strong> Your mental health is part of the picture. Our Healthonomic team treats the whole person. <a href="#/service/diabetes">Explore our Diabetes Management services &rarr;</a></div>
<h3>Mental Health and Your Immune System</h3>
<p>Chronic stress suppresses immune function &ndash; this is well-established science. When cortisol levels stay elevated for extended periods, the body&rsquo;s ability to fight infections, recover from illness, and regulate inflammation is compromised. This persistent low-grade inflammation has been linked to conditions including arthritis, colitis, and COPD. Your body keeps score even when your mind is trying to push through.</p>
<h3>Mental Health and Sleep</h3>
<p>Sleep is when your body repairs itself &ndash; and mental health conditions like anxiety, depression, and PTSD are among its most common disruptors. The relationship is bidirectional: poor mental health degrades sleep quality, and poor sleep worsens mental health. Chronic sleep deprivation elevates blood pressure, disrupts blood sugar regulation, impairs immunity, affects hormones, and increases the risk of weight gain. For anyone managing a chronic condition, poor sleep driven by mental health struggles can quietly undermine everything else they&rsquo;re doing right.</p>
<h3>Mental Health and Blood Pressure</h3>
<p>Anxiety and chronic stress directly contribute to elevated blood pressure by keeping blood vessels constricted and the heart working harder than it should. Over time, this contributes to hypertension, which, left unmanaged, raises the risk of stroke, kidney disease, and heart attack. Mental health struggles can also reduce motivation for exercise, healthy eating, and medication adherence, all of which compound the impact.</p>
<div style="${CTA}"><strong>Managing high blood pressure?</strong> Talk to your Healthonomic provider about the stress-pressure connection. <a href="#/service/blood-pressure">Learn about our Blood Pressure services &rarr;</a></div>
<h2>Warning Signs: When Your Body Is Telling You Your Mind Needs Attention</h2>
<p>Mental health struggles rarely announce themselves dramatically. They often show up first in the body as vague, persistent symptoms that are easy to dismiss. Here are signs worth raising with your primary care provider:</p>
<ul>
<li>Persistent fatigue that doesn&rsquo;t improve with rest</li>
<li>Frequent headaches or unexplained body aches and pains</li>
<li>Digestive issues &ndash; nausea, stomach pain, or bowel changes without a clear medical cause</li>
<li>Chest tightness or noticeable heart palpitations</li>
<li>Significant changes in appetite or unexplained weight shifts</li>
<li>Getting sick more frequently or taking longer to recover</li>
<li>Difficulty concentrating, remembering things, or making decisions</li>
<li>Physical tension, especially in the neck, jaw, or shoulders</li>
<li>Sleeping too much or too little, or waking unrefreshed</li>
<li>Low energy and a loss of motivation or interest in daily life</li>
<li>Feeling emotionally numb, disconnected, or persistently irritable</li>
</ul>
<div style="${WARN}"><strong>Important:</strong> These symptoms can have many possible causes. This checklist is for general educational awareness only &ndash; it is not a diagnostic tool and does not replace a professional evaluation. Please speak with your healthcare provider for an accurate, individualized assessment.</div>
<h2>What You Can Do: Practical, Evidence-Backed Steps for 2026</h2>
<p>In the spirit of both 2026 themes &ndash; creating more good days together, and breaking the silence around stigma &ndash; here are steps supported by major health organizations. Please consult your healthcare provider before making significant changes to your health routine.</p>
<h3>1. Talk to Your Primary Care Doctor &ndash; It Counts as a Mental Health Visit</h3>
<p>Your primary care provider is often the most accessible first step for mental health support. At Healthonomic, our providers ask how you&rsquo;re <em>really</em> doing &ndash; not just about your numbers. If you&rsquo;ve been feeling overwhelmed, persistently low, anxious, or simply &ldquo;not yourself,&rdquo; that conversation belongs in the exam room.</p>
<h3>2. Move Your Body &ndash; With Your Doctor&rsquo;s Guidance</h3>
<p>Physical activity is one of the most consistently supported strategies for improving mood and reducing symptoms of anxiety and depression. You don&rsquo;t need intense workouts &ndash; regular walking or gentle movement can make a meaningful difference. Always check with your doctor before starting any new exercise program, especially if you have a chronic condition.</p>
<h3>3. Protect Your Sleep</h3>
<p>The CDC and National Sleep Foundation recommend that most adults aim for 7&ndash;9 hours of quality sleep per night. If persistent sleep disruption is affecting your daily life, discuss this with your healthcare provider &ndash; there may be underlying factors worth evaluating.</p>
<h3>4. Build and Protect Social Connections</h3>
<p>Social isolation is linked to higher risk of depression, anxiety, and heart disease. NAMI&rsquo;s 2026 message is clear: healing happens in community, not in isolation.</p>
<h3>5. Manage Stress Before It Manages You</h3>
<p>Strategies broadly supported by the National Institute of Mental Health include mindfulness, deep breathing, journaling, spending time in nature, and connecting with trusted people. What matters most is finding healthy outlets that genuinely work for you &ndash; and reaching out for professional support when the load feels too heavy to carry alone.</p>
<h3>6. Seek Professional Help &ndash; It Is a Sign of Strength, Not Weakness</h3>
<p>Therapy, counseling, and when appropriate, medication under a provider&rsquo;s supervision, are evidence-based treatments that help millions of people each year. Your Healthonomic provider can connect you with appropriate local referrals across Cook County.</p>
<div style="${CTA}"><strong>Take the first step toward whole-person care?</strong> Our Healthonomic team in Orland Park, Evergreen Park, and Palos Heights is here for you. Same-day appointments available. <a href="https://livewell.aah.org/chart/Authentication/Login" target="_blank" rel="noopener">Schedule a wellness visit today &rarr;</a></div>
<h2>Ready for More Good Days? We&rsquo;re Here for You.</h2>
<p>At Healthonomic Primary Care, true health means caring for the whole person &ndash; mind, body, and spirit. Whether you&rsquo;re dealing with a chronic condition, feeling burned out, or simply want to check in on your overall wellbeing, our experienced team of physicians and nurse practitioners is here for you across Cook County. We offer same-day appointments, extended hours, and compassionate, patient-first care.</p>
<ul>
<li><a href="https://livewell.aah.org/chart/Authentication/Login" target="_blank" rel="noopener">Book an appointment online</a></li>
<li><a href="#/services">See all our services</a></li>
<li><a href="#/service/primary-care">Primary care</a></li>
<li><a href="#/service/womens-health">Women&rsquo;s health</a></li>
<li><a href="#/service/check-ups">Wellness check-ups</a></li>
<li><a href="#/locations">Find a location &ndash; Orland Park, Evergreen Park, Palos Heights</a></li>
</ul>
<p><strong>Call us:</strong> General line: <a href="tel:7086711500">708-671-1500</a> | Orland Park: <a href="tel:7086961311">708-696-1311</a></p>
<div style="${EMRG}">If you or someone you know is experiencing a mental health crisis, call or text <strong>988</strong> (Suicide &amp; Crisis Lifeline) for immediate, free, and confidential support, available 24/7.</div>
<p style="${DISC}">This blog post is intended for general educational and informational purposes only. It does not constitute medical advice, diagnosis, or treatment. All statistical data is sourced from publicly available, peer-reviewed, or government health publications. Always consult a qualified healthcare provider for advice specific to your individual health situation. &copy; 2026 Healthonomic Primary Care. All rights reserved. Orland Park | Evergreen Park | Palos Heights, IL.</p>`
  };

  B['outdoor-movement-most-underrated-health-tools'] = {
    image: '/assets/uploads/april-26-blog.png',
    body: `
<p><em>Discover why regular outdoor walking supports heart health, blood sugar, stress, and sleep.</em></p>
<p>When patients think about improving their health, they often picture intensive workouts or restrictive diet plans. However, one of the most evidence-supported and sustainable interventions is much simpler: regular outdoor movement.</p>
<p>Emerging research demonstrates that time spent outdoors, particularly when combined with light-to-moderate physical activity, positively influences cardiovascular health, metabolic regulation, stress physiology, and sleep patterns.</p>
<h2>&#129728; It&rsquo;s Good for Your Heart | Cardiovascular Benefits</h2>
<p>Your heart is a muscle, and like any muscle, it thrives with regular, consistent use. Moderate-intensity aerobic activity &ndash; like a brisk walk around your neighborhood &ndash; is one of the most well-studied ways to protect your cardiovascular health.</p>
<p>The U.S. Department of Health and Human Services recommends that adults aim for at least <strong>150 minutes of moderate-intensity physical activity per week</strong> &ndash; that&rsquo;s just about 20&ndash;25 minutes a day. Research consistently shows that hitting this target is associated with a meaningfully reduced risk of heart disease, high blood pressure, and overall mortality <em>(U.S. Department of Health and Human Services, 2018).</em></p>
<p>What makes outdoor walking especially heart-friendly is how <em>sustainable</em> it is. You don&rsquo;t need a gym. You don&rsquo;t need a trainer. You just need a good pair of shoes and a safe route. Studies show that outdoor walking tends to feel easier than equivalent indoor exercise &ndash; meaning people actually stick with it longer.</p>
<p>Consistency is what creates results. And walking outside makes consistency feel effortless.</p>
<div style="${CTA}"><strong>Concerned about your heart health or blood pressure?</strong> Our team at Healthonomic is here to help. <a href="#/service/blood-pressure">Learn about our Blood Pressure and Heart Disease services &rarr;</a></div>
<h2>Blood Sugar Regulation and Weight Management</h2>
<p>Here&rsquo;s one of our favorite pieces of research to share with patients: a study published in <em>Diabetes Care</em> found that just <strong>three 15-minute bouts of moderate walking after meals significantly improved 24-hour blood sugar control</strong> in older adults at risk for impaired glucose tolerance <em>(DiPietro et al., 2013).</em></p>
<p>That&rsquo;s remarkable. Not an hour at the gym. Not a major dietary overhaul. A short walk after eating.</p>
<p>For anyone managing prediabetes, type 2 diabetes, or weight concerns, post-meal walking is one of the gentlest and most evidence-supported habits you can build. It helps your muscles use glucose more efficiently, reduces post-meal blood sugar spikes, and supports insulin sensitivity over time.</p>
<p>And when it comes to weight management, the research is equally encouraging &ndash; regular physical activity is one of the strongest predictors of long-term weight maintenance <em>(Jakicic et al., 2019).</em></p>
<p>The key message here is this: <strong>consistency matters far more than intensity.</strong> A 20-minute walk after dinner, done regularly, will do more for your metabolic health than an occasional intense workout followed by weeks of inactivity.</p>
<div style="${CTA}"><strong>Managing diabetes or prediabetes?</strong> We offer personalized diabetes management at all three of our locations. <a href="#/service/diabetes">Explore our Diabetes Management services &rarr;</a></div>
<h2>Stress Reduction and Cortisol Regulation</h2>
<p>We all know stress is bad for us. But the specific ways chronic stress affects the body are worth understanding, because they connect directly to conditions we treat every day at Healthonomic.</p>
<p>When you&rsquo;re chronically stressed, your body produces elevated levels of cortisol, a stress hormone. Over time, high cortisol is linked to weight gain (especially around the midsection), elevated blood pressure, poor sleep, and increased inflammation. It&rsquo;s a cycle that feeds on itself.</p>
<p>Here&rsquo;s the good news: <strong>spending time in natural environments measurably reduces cortisol levels.</strong> A landmark study by Park et al. (2010) on the Japanese practice of <em>Shinrin-yoku</em> (forest bathing) found significant physiological changes &ndash; lower cortisol, lower heart rate, and lower blood pressure after time spent in nature compared to urban environments. And a major systematic review confirmed that exposure to green space is linked to improved mental health outcomes across populations <em>(Twohig-Bennett &amp; Jones, 2018).</em></p>
<p>You don&rsquo;t need a forest. A neighborhood park, a tree-lined street, or even a quiet outdoor space near your home can provide similar benefits. The combination of physical movement <em>and</em> natural surroundings appears to be especially powerful.</p>
<p>There&rsquo;s also something psychologically easier about going for a walk outside versus forcing yourself to go to a gym. It feels less like a &ldquo;workout&rdquo; and more like a break, which means you&rsquo;re more likely to actually do it, even on stressful days when motivation is low.</p>
<div style="${CTA}"><strong>Stress affecting your health?</strong> Our providers take a whole-person approach to your wellbeing. <a href="https://livewell.aah.org/chart/Authentication/Login" target="_blank" rel="noopener">Schedule a wellness check-up &rarr;</a></div>
<h2>Sleep and Circadian Rhythm Alignment</h2>
<p>This one surprises a lot of people: what you do in the morning affects how well you sleep at night.</p>
<p>Your body runs on a circadian rhythm, an internal 24-hour clock that regulates sleep, appetite, energy, and hormones. One of the most powerful ways to keep that clock well-calibrated is exposure to natural light in the morning. Research by Wright et al. (2013) showed that natural light-dark cycle exposure significantly entrains the human circadian clock, improving nighttime sleep quality.</p>
<p>And sleep, it turns out, is deeply connected to metabolic health. Poor sleep quality is associated with disrupted insulin sensitivity, increased appetite, and higher cardiometabolic risk <em>(Tasali et al., 2008).</em> Getting better sleep doesn&rsquo;t just make you feel more rested &ndash; it actively supports your blood sugar regulation and heart health.</p>
<p>So a short morning walk does double duty: it gets you moving <em>and</em> helps reset your internal clock for a better night&rsquo;s sleep.</p>
<h2>Turning Knowledge Into Action</h2>
<p>Lifestyle change works best when it is measurable. That&rsquo;s why we&rsquo;ve created a free, printable <strong>Spring Habit Tracker</strong> designed specifically around the lifestyle habits that support your preventive and chronic care goals. It includes space to track:</p>
<ul>
<li>Outdoor movement</li>
<li>Post-meal walks</li>
<li>Hydration goals</li>
<li>Medication adherence</li>
<li>Sleep tracking</li>
<li>Stress management</li>
<li>Blood pressure monitoring</li>
<li>Weight tracking</li>
<li>Fasting glucose logging</li>
<li>A1C documentation (if applicable)</li>
</ul>
<div style="${CTA}"><strong>&#11015;&#65039; Download Your Spring Habit Tracker.</strong> Build consistency this season with our premium, printable tracker designed to support preventive and lifestyle medicine. <a href="/assets/uploads/Healthonomic_Habit_Tracker_NoCarbPair-1.pdf" target="_blank" rel="noopener">Download Spring Habit Tracker &rarr;</a><br>Print it. Use it weekly. Bring it to your next visit so we can review your progress together.</div>
<h2>FAQs</h2>
<p><strong>Q: How much should I walk per day to see health benefits?</strong><br>Research supports a goal of at least 150 minutes of moderate-intensity activity per week, which works out to roughly 20&ndash;30 minutes most days. Even shorter walks provide benefit; the important thing is consistency. Always check with your provider before significantly increasing your activity level, especially if you have a chronic condition.</p>
<p><strong>Q: Is walking outside better than walking on a treadmill?</strong><br>Both provide cardiovascular benefits. However, outdoor walking is associated with additional advantages, including natural light exposure (supporting sleep and mood), nature-related stress reduction, and higher long-term adherence. If outdoor walking is accessible and safe for you, it&rsquo;s a great first choice.</p>
<p><strong>Q: Can walking really help lower blood sugar?</strong><br>Yes, particularly walking after meals. Research shows that post-meal walking can significantly improve 24-hour glycemic control <em>(DiPietro et al., 2013)</em>. If you&rsquo;re managing diabetes or prediabetes, speak with your Healthonomic provider about how to safely incorporate this into your routine.</p>
<p><strong>Q: What if I have joint pain, heart disease, or another condition? Is walking safe for me?</strong><br>For many people with chronic conditions, gentle walking is not only safe but encouraged. However, the right type, duration, and intensity of exercise depend on your individual health picture. Please consult your provider before starting or changing an exercise routine.</p>
<p><strong>Q: When is the best time of day to walk?</strong><br>Morning walks offer the added benefit of natural light exposure for circadian rhythm support. Post-meal walks (especially after dinner) offer blood sugar benefits. The honest answer is: the best time to walk is whatever time you&rsquo;ll actually do it consistently.</p>
<p><strong>Q: Where can I find a primary care doctor near me in the south suburbs of Chicago?</strong><br>Healthonomic Primary Care has three convenient locations in Cook County &ndash; in <strong>Orland Park, Palos Heights, and Evergreen Park</strong>. <a href="#/locations">Find your nearest location &rarr;</a></p>
<h2>A Gentle Reminder from Your Healthonomic Team</h2>
<p>You don&rsquo;t have to overhaul your entire life to start feeling better. Sometimes the most powerful changes are the quietest ones &ndash; a walk around the block after dinner, ten minutes of morning sunlight, a good night&rsquo;s sleep.</p>
<p>We&rsquo;re here to support you every step of the way (literally). Whether you&rsquo;re managing a chronic condition, focused on prevention, or just ready to feel a little more like yourself again, our team would love to be your partner in health.</p>
<p>&#128197; <a href="#/contact"><strong>Book an appointment at Healthonomic &rarr;</strong></a><br>&#128205; Serving Orland Park, Palos Heights &amp; Evergreen Park, IL<br>&#128222; Call us: <a href="tel:7086711500">708-671-1500</a></p>
<h2>References</h2>
<p style="font-size:14px;color:#6B7280;line-height:1.7;">DiPietro, L., et al. (2013). Three 15-minute bouts of moderate postmeal walking significantly improve 24-hour glycemic control. <em>Diabetes Care</em>, 36(10).<br>Jakicic, J. M., et al. (2019). Physical activity and weight loss maintenance. <em>Obesity</em>, 27(2).<br>Park, B. J., et al. (2010). The physiological effects of Shinrin-yoku. <em>Environmental Health and Preventive Medicine</em>, 15(1).<br>Tasali, E., et al. (2008). Slow-wave sleep and the risk of type 2 diabetes. <em>PNAS</em>, 105(3).<br>Twohig-Bennett, C., &amp; Jones, A. (2018). The health benefits of the great outdoors. <em>Environmental Research</em>, 166.<br>U.S. Department of Health and Human Services (2018). <em>Physical Activity Guidelines for Americans</em>, 2nd ed.<br>Wright, K. P., et al. (2013). Entrainment of the human circadian clock to the natural light-dark cycle. <em>Current Biology</em>, 23(16).</p>
<p style="${DISC}">This content is for general educational and informational purposes only and does not constitute medical advice. Always consult your healthcare provider before making changes to your activity, diet, or care routine. &copy; 2026 Healthonomic Primary Care. All rights reserved.</p>`
  };

  B['the-gut-kidney-connection'] = {
    image: '/assets/uploads/march-blog-26.png',
    body: `
<p style="font-size:13px;font-weight:700;letter-spacing:1px;color:#5278B1;text-transform:uppercase;margin:0 0 18px;">Healthonomic | Longevity &amp; Wellness Blog | March 2026 &middot; National Nutrition Month</p>
<p>Most of us don&rsquo;t spend a lot of time thinking about our gut and kidneys until something goes wrong. But here&rsquo;s what&rsquo;s interesting: these two systems are in constant communication, quietly working together every single day to keep your body in balance.</p>
<p>During National Nutrition Month, we&rsquo;re shining a light on this under-appreciated connection and sharing three simple, everyday habits that support both. No complicated protocols. No extreme diets. Just small, consistent choices that add up over time.</p>
<h2>Why the Gut and Kidneys Work as a Team</h2>
<p>Think of your gut as the intake manager and your kidneys as the filtration system. Your gut absorbs nutrients, hosts trillions of bacteria that regulate inflammation, and sends signals throughout your body. Your kidneys then filter your blood, manage fluid balance, and remove waste, including byproducts of what your gut processes.</p>
<p>When one is under stress, the other often feels it too. Research has increasingly pointed to what scientists call the &ldquo;gut-kidney axis,&rdquo; a bidirectional relationship where gut health can influence kidney function, and vice versa.</p>
<p><em>You don&rsquo;t need to be a biology expert to take care of both. A few daily habits go a long way.</em></p>
<h2>Habit #1: Hydrate Consistently</h2>
<p><strong>Why it matters for your kidneys and your gut.</strong> Your kidneys filter roughly 200 liters of fluid per day. Water is the medium that makes this possible. Without adequate hydration, your kidneys have to work harder to concentrate urine and flush out waste, and over time, that strain adds up.</p>
<p>But hydration isn&rsquo;t just a kidney story. Your gut lining depends on water to function properly, and dehydration is one of the most common triggers of constipation, which, when chronic, can actually create downstream effects on kidney health.</p>
<p><strong>Simple ways to stay on top of it:</strong></p>
<ul>
<li>Start your morning with a full glass of water before coffee or tea.</li>
<li>Keep a reusable water bottle visible on your desk or counter; out of sight really does mean out of mind.</li>
<li>If plain water feels boring, try adding lemon, cucumber, or mint for a light, natural flavor.</li>
<li>Pay attention to the color of your urine; pale yellow is a good sign you&rsquo;re well hydrated.</li>
</ul>
<h2>Habit #2: Prioritize Fiber &ndash; Your Gut&rsquo;s Best Friend</h2>
<p>Fiber doesn&rsquo;t get nearly enough credit. It&rsquo;s best known for keeping things moving in your digestive system, but its benefits go much deeper than that.</p>
<p>A fiber-rich diet feeds the beneficial bacteria in your gut, helping maintain a healthy microbiome, the diverse community of microorganisms that plays a major role in regulating inflammation throughout your body. And because systemic inflammation is closely tied to kidney health, a happier gut microbiome often means less stress on your kidneys too.</p>
<p><strong>Fiber also helps:</strong></p>
<ul>
<li>Slows the absorption of sugar, which supports healthy blood sugar levels &ndash; a key factor in long-term kidney health.</li>
<li>Lowers LDL cholesterol and reduces cardiovascular risk, which also affects kidney function.</li>
<li>Promotes regular bowel movements, reducing the recirculation of waste products that the kidneys would otherwise have to filter.</li>
</ul>
<p><strong>Easy fiber wins to start this month:</strong></p>
<ul>
<li>Swap white bread or rice for whole-grain versions.</li>
<li>Add beans or lentils to soups, salads, or grain bowls a few times a week.</li>
<li>Keep fruit handy; berries, apples, and pears are all excellent fiber sources.</li>
<li>Snack on nuts, seeds, or raw veggies instead of processed options.</li>
</ul>
<p>The goal isn&rsquo;t perfection; it&rsquo;s progress. Even small increases in daily fiber intake can make a meaningful difference over time.</p>
<h2>Habit #3: Be Mindful with Over-the-Counter Pain Relievers</h2>
<p>This one surprises a lot of people. NSAIDs &ndash; non-steroidal anti-inflammatory drugs like ibuprofen and naproxen &ndash; are among the most commonly used over-the-counter medications in the world. They&rsquo;re effective, accessible, and often the go-to for headaches, muscle soreness, or everyday aches.</p>
<p>But frequent or heavy use of NSAIDs can quietly put stress on the kidneys. These medications work in part by affecting blood flow to the kidneys, and over time, regular use can impact kidney filtration, especially in people who already have elevated blood pressure, diabetes, or existing kidney concerns.</p>
<p><strong>This isn&rsquo;t about avoiding NSAIDs entirely; it&rsquo;s about being intentional:</strong></p>
<ul>
<li>Use the lowest effective dose for the shortest time needed.</li>
<li>Stay well hydrated when you do take them.</li>
<li>If you find yourself reaching for them regularly, it&rsquo;s worth a conversation with your healthcare provider about what&rsquo;s driving the pain, and whether there are alternatives worth exploring.</li>
<li>Acetaminophen (Tylenol) is often a gentler option for the kidneys, though it has its own considerations; your provider can help you navigate what&rsquo;s right for you.</li>
</ul>
<div style="${WARN}"><em>The goal here isn&rsquo;t alarm; it&rsquo;s awareness. Most people have no idea that something as common as a pain reliever could quietly affect kidney health over time. Now you do.</em></div>
<h2>People Also Ask</h2>
<p><strong>Can gut problems affect kidney health?</strong><br>Yes, research suggests the gut and kidneys communicate through what scientists call the gut-kidney axis. Imbalances in gut bacteria and chronic gut inflammation may contribute to increased stress on the kidneys over time. This is an evolving area of research, and a reason why supporting gut health is increasingly seen as part of a broader approach to internal wellness.</p>
<p><strong>How much water should I drink for kidney health?</strong><br>General guidance often points to around 8 cups (64 oz) per day, but individual needs vary based on body size, activity level, climate, and overall health. The best real-time indicator? Urine color &ndash; pale yellow typically means you&rsquo;re well hydrated. Always check with your provider if you have specific kidney concerns.</p>
<p><strong>What foods are good for both gut and kidney health?</strong><br>Foods that tend to support both systems include fiber-rich vegetables (leafy greens, bell peppers, cauliflower), fruits like berries and apples, and plant-based proteins like lentils and chickpeas. People with diagnosed kidney conditions may have specific dietary restrictions, so it&rsquo;s always worth working with a provider or dietitian to personalize recommendations.</p>
<p><strong>Are NSAIDs really bad for your kidneys?</strong><br>Occasional, responsible use of NSAIDs is generally well-tolerated for most healthy adults. The concern comes with frequent or long-term use; particularly in people with high blood pressure, diabetes, or existing kidney issues, where the risk of impact on kidney function is higher.</p>
<p><strong>What is the gut-kidney axis?</strong><br>The gut-kidney axis refers to the bidirectional communication between the gastrointestinal tract and the kidneys. Gut bacteria produce metabolites and signals that can influence kidney function, while kidney health can, in turn, affect gut microbiome balance. It&rsquo;s a growing area of research in longevity and internal medicine.</p>
<h2>Small Habits, Long-Term Protection</h2>
<p>The gut and kidneys aren&rsquo;t two separate systems you need to manage independently; they&rsquo;re partners. And the habits that support one tend to support the other.</p>
<p>Drinking more water, adding fiber to your meals, and being thoughtful about pain reliever use aren&rsquo;t dramatic lifestyle changes. But practiced consistently over months and years, they become the foundation of genuine internal health.</p>
<p>That&rsquo;s what longevity looks like in practice; not extreme interventions, but small daily choices made with intention.</p>
<div style="${CTA}"><strong>Want to take the next step toward proactive wellness?</strong> The team at Healthonomic is here to help you build a health plan that fits your life. <a href="#/contact">Reach out to schedule a conversation with our care team &rarr;</a></div>
<h2>Sources &amp; References</h2>
<p style="font-size:13.5px;color:#6B7280;line-height:1.8;"><strong>Gut-Kidney Axis:</strong> <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6463098/" target="_blank" rel="noopener">NIH &ndash; The Gut Microbiome and Kidney Disease</a> &middot; National Kidney Foundation.<br><strong>Hydration:</strong> National Kidney Foundation &middot; <a href="https://health.clevelandclinic.org/how-much-water-do-you-need-daily" target="_blank" rel="noopener">Cleveland Clinic</a>.<br><strong>Fiber:</strong> <a href="https://www.hsph.harvard.edu/nutritionsource/carbohydrates/fiber/" target="_blank" rel="noopener">Harvard T.H. Chan School of Public Health</a> &middot; NIDDK &middot; Academy of Nutrition and Dietetics.<br><strong>NSAIDs:</strong> National Kidney Foundation &middot; U.S. FDA.<br><strong>General:</strong> NIDDK &middot; CDC &ndash; Chronic Kidney Disease Basics.</p>
<p style="${DISC}">This content is provided for general informational and educational purposes only. It does not constitute medical advice, diagnosis, or treatment, and should not be used as a substitute for professional medical guidance. Individual health needs vary; always consult a qualified healthcare professional before making changes to your diet, medications, or health routine, particularly if you have a pre-existing condition.</p>`
  };

  B['5-ways-to-love-your-heart-that-involve-going-outside-more'] = {
    image: '/assets/uploads/feb-26-blog.png',
    body: `
<p><em>Simple, enjoyable habits for heart wellness this American Heart Month and beyond.</em></p>
<p>When you think about heart health, images of endless cardio and strict salads might immediately pop into your head. For many, the idea of &ldquo;heart-healthy living&rdquo; feels daunting &ndash; leading to overwhelm instead of action.</p>
<p>At Healthonomic, we believe your body is designed to heal itself, and supporting your heart doesn&rsquo;t have to be a chore. In fact, some of the most powerful ways to boost your cardiovascular well-being are surprisingly simple, enjoyable, and <em>don&rsquo;t require a gym membership or exhaustive workouts.</em></p>
<p>This February, during <strong>American Heart Month,</strong> let&rsquo;s explore five compassionate ways to show your heart some love &ndash; no treadmill required.</p>
<h2>1. Master the Art of the Belly Laugh</h2>
<p>Yes, really! Laughing doesn&rsquo;t just lighten your mood &ndash; it also has real benefits for your cardiovascular system. When you laugh, your body releases endorphins and your blood vessels dilate, which can help increase blood flow and reduce stress hormones. Over time, positive emotional experiences like laughter can support healthier circulation.</p>
<div style="${INFO}"><strong>&#128161; Heart-Friendly Action &ndash; Minimize Your Alcohol Consumption.</strong> It is strongly advised to minimize your intake of alcoholic beverages, as excessive consumption poses significant risks to both your neurological and cardiovascular systems.</div>
<h2>2. Befriend Healthy Fats (Hello, Avocado!)</h2>
<p>Let&rsquo;s bust a myth: <strong>not all fats are bad.</strong> In fact, healthy fats &ndash; like monounsaturated and polyunsaturated fats &ndash; are essential for heart health. These fats help lower <em>LDL</em> (&ldquo;bad&rdquo;) cholesterol and support balanced energy. Think avocados, walnuts, olive oil, chia seeds, and fatty fish like salmon.</p>
<div style="${INFO}"><strong>&#128161; Heart-Friendly Action.</strong> Swap butter for avocado on toast, sprinkle walnuts into your oatmeal, or drizzle olive oil on roasted veggies for a boost of flavor <em>and</em> heart-smart nutrition.</div>
<h2>3. Embrace the Power of &ldquo;Unplugging&rdquo;</h2>
<p>Modern life is <em>busy.</em> Constant alerts, work demands, and screens keep our nervous systems on high alert &ndash; and chronic stress is one of the silent enemies of heart health. Stress can elevate blood pressure, trigger inflammation, and disrupt sleep &ndash; all of which matter for cardiovascular wellness.</p>
<div style="${INFO}"><strong>&#128161; Heart-Friendly Action.</strong> Designate a daily &ldquo;unplugged hour&rdquo; &ndash; no phones, no screens. Take a quiet walk, enjoy a calming hobby, or try just five minutes of mindful breathing before bed.</div>
<h2>4. Prioritize Your Zzz&rsquo;s (Sleep Isn&rsquo;t Lazy!)</h2>
<p>Sleep is one of the most underestimated aspects of heart health. During sleep, your blood pressure naturally dips, and your heart gets rest. Over time, consistent sleep deprivation can keep your blood pressure elevated and increase inflammatory markers, making it harder for your cardiovascular system to recover and thrive.</p>
<div style="${INFO}"><strong>&#128161; Heart-Friendly Action.</strong> Aim for 7&ndash;9 hours of sleep per night. Create a calming bedtime routine, make your bedroom dark and cool, and consider turning off screens an hour before bedtime.</div>
<h2>5. Hydrate, Hydrate, Hydrate!</h2>
<p>This one <em>sounds simple</em> &ndash; but it&rsquo;s powerful. Proper hydration supports efficient heart function. When you&rsquo;re well-hydrated, your blood flows more easily, and your heart doesn&rsquo;t have to work as hard to pump it throughout your body. Dehydration can make your blood thicker, increasing the effort needed with every beat.</p>
<div style="${INFO}"><strong>&#128161; Heart-Friendly Action.</strong> Keep a refillable water bottle with you and sip throughout the day.</div>
<h2>&#10084;&#65039; Heart Health Is a Journey &ndash; Not a Sprint</h2>
<p>Understanding your heart means more than just glancing at cholesterol numbers. It&rsquo;s about listening to your body, making intentional daily choices, and building habits that support your wellness for years to come. And here&rsquo;s the secret: <strong>small, enjoyable habits &ndash; practiced consistently &ndash; add up.</strong> It&rsquo;s all about progress.</p>
<h2>Common Questions About Heart Health</h2>
<p><strong>How can I improve heart health without exercising?</strong><br>You don&rsquo;t need to be chained to a treadmill to support your cardiovascular system. Eating foods rich in healthy fats, whole grains, fruits, and vegetables supports heart wellness and helps manage blood pressure and cholesterol naturally. Stress management &ndash; through mindfulness, deep breathing, or meaningful social connection &ndash; can help lower blood pressure. Prioritizing quality sleep (7&ndash;9 hours) helps your body repair, and staying well-hydrated supports efficient circulation.</p>
<p><strong>What lifestyle habits are good for heart health?</strong><br>A heart-healthy lifestyle is built on everyday habits: a balanced diet with vegetables, whole grains, healthy fats, and lean proteins; managing stress through relaxation and connection; prioritizing sufficient sleep; staying hydrated; limiting processed foods, excess salt, and tobacco; and regular check-ups to monitor blood pressure and cholesterol.</p>
<p><strong>Can stress affect heart health?</strong><br>Yes. When stress is prolonged, the body&rsquo;s &ldquo;fight-or-flight&rdquo; response stays active, raising heart rate and blood pressure and contributing to inflammation over time. Healthy stress-management practices such as meditation, deep breathing, social time, creative hobbies, or moments of laughter can help reduce the burden of stress and support heart health.</p>
<p><strong>Are healthy fats good for your heart?</strong><br>Yes. Healthy fats from sources like avocados, nuts, and fatty fish help support cholesterol balance and long-term heart health.</p>
<p><strong>Does sleep really impact heart health?</strong><br>Absolutely. During sleep, blood pressure naturally dips, giving your cardiovascular system a break. Consistently getting fewer than about seven hours per night has been linked with higher blood pressure, inflammation, and greater risk for heart attack and stroke over time.</p>
<p><strong>How much water should I drink for heart health?</strong><br>There isn&rsquo;t a single &ldquo;magic number,&rdquo; but proper hydration supports heart function by helping blood circulate more easily. Use water as your main drink, limit sugary or highly caffeinated beverages, and add natural flavors like lemon or cucumber if plain water feels boring.</p>
<p><strong>Is it okay if I don&rsquo;t enjoy exercise?</strong><br>Yes &ndash; completely. Movement can be as simple as stretching to music, gardening, dancing around your living room, playing with pets, or walking at your own pace. The goal is to reduce sedentary time and find joyful ways to move that fit your lifestyle.</p>
<p><strong>What are easy heart-healthy habits to start with?</strong><br>Drink more water; prioritize sleep with a consistent bedtime; add heart-friendly foods like nuts, berries, and leafy greens; take short breaks from screens to reduce stress; and connect with a friend or family member to support emotional well-being.</p>
<p style="${SRC}"><em>Sources include the American Heart Association (Life&rsquo;s Essential 8), CDC, NHLBI, Mayo Clinic, Harvard Health, and the Sleep Foundation.</em></p>
<div style="${CTA}"><strong>Your free guide to help you keep on track.</strong> Download our FREE &ldquo;Heart-Health Intuition Checklist&rdquo; to start noticing patterns in your daily life that truly support your heart. <a href="/assets/uploads/Heart-Health-Intuition-Checklist.pdf" target="_blank" rel="noopener">Send me my free checklist (PDF) &rarr;</a></div>
<h2>Need Personalized Support?</h2>
<p>If you&rsquo;re worried about your heart or ready for a personalized wellness plan, the team at Healthonomic is here to partner with you. We offer compassionate, comprehensive primary care and chronic disease management focused on lifestyle, longevity, and sustainable wellness across the greater Chicago area.</p>
<div style="${CTA}"><a href="https://livewell.aah.org/chart/Authentication/Login" target="_blank" rel="noopener"><strong>Schedule your appointment today &rarr;</strong></a></div>
<p style="${DISC}">This content is for general informational and educational purposes only and does not constitute medical advice. Always consult your healthcare provider before making changes to your diet, activity, or care routine. &copy; 2026 Healthonomic Primary Care. All rights reserved.</p>`
  };

  B['getting-back-on-track-after-the-holidays-and-post-holiday-stress'] = {
    image: '/assets/uploads/Gemini_Generated_Image_bbl2subbl2subbl2-e1767987362998.png',
    body: `
<p>The holidays are filled with connection, celebration, and tradition, but they can also throw our routines off balance. Between late nights, indulgent meals, packed schedules, and added stress, many people find themselves asking the same question once the season winds down:</p>
<p style="font-size:21px;font-weight:600;color:#15366E;">&ldquo;Is my health still on track?&rdquo;</p>
<p>If you&rsquo;re feeling a little sluggish, overwhelmed, or out of sync after the holidays, you&rsquo;re not alone. The good news? Resetting doesn&rsquo;t mean extreme changes or guilt-driven resolutions. At Healthonomic, we believe wellness is about <strong>sustainable habits, consistency, and long-term longevity, not quick fixes</strong>.</p>
<p>Here&rsquo;s a practical, compassionate guide to getting back into a healthy rhythm after the holidays &ndash; one step at a time.</p>
<h2>Why the Holidays Can Disrupt Our Health (And Why That&rsquo;s Normal)</h2>
<p>The holiday season naturally shifts routines. Sleep schedules change. Stress levels rise. Meals look different. Movement takes a back seat.</p>
<p>None of this means you&rsquo;ve failed your health goals. It simply means your body and mind are responding to a busy season. <strong>The key is not &ldquo;undoing&rdquo; the holidays but realigning with habits that support your overall wellness.</strong></p>
<h2>1. Re-Establish Your Daily Routine (Start Small)</h2>
<p>One of the fastest ways to feel grounded again is to rebuild structure. Instead of trying to overhaul everything at once, focus on <strong>one or two anchor habits</strong>, such as:</p>
<ul>
<li>Waking up and going to bed at consistent times</li>
<li>Eating meals at regular intervals</li>
<li>Scheduling a daily walk or movement break</li>
</ul>
<p>Routines signal safety and stability to your body, which supports energy, mood, and long-term health. Consistency matters more than intensity.</p>
<h2>2. Support Your Body with Balanced Nutrition (Without Restriction)</h2>
<p>After the holidays, many people feel tempted to &ldquo;cut back&rdquo; or detox. Instead, think in terms of <strong>adding nourishment</strong>, not removing joy. Helpful resets can include:</p>
<ul>
<li>Drinking more water throughout the day</li>
<li>Including fruits, vegetables, whole grains, and lean proteins</li>
<li>Planning simple, balanced meals during the week</li>
<li>Reducing sugar and processed foods</li>
<li>Saving money and cutting back on takeout, including coffee loaded with sugar and calories</li>
</ul>
<p>Food is fuel and also connection. A healthy approach leaves room for flexibility while prioritizing nourishment.</p>
<h2>3. Manage Post-Holiday Stress with Intention</h2>
<p>The holidays don&rsquo;t end when the decorations come down. Financial pressure, work demands, and family responsibilities often linger. To reduce stress:</p>
<ul>
<li>Schedule short breaks during your day</li>
<li>Try deep breathing or mindfulness practices</li>
<li>Spend time outdoors, even briefly</li>
<li>Reconnect with activities that bring calm or joy</li>
</ul>
<p>Stress management plays a powerful role in <strong>mental health, heart health, and long-term wellness</strong>.</p>
<h2>4. Prioritize Sleep as a Wellness Foundation</h2>
<p>Late nights and disrupted schedules are common during the holidays. Resetting your sleep routine can have an immediate positive impact on how you feel. Consider:</p>
<ul>
<li>Creating a consistent bedtime routine</li>
<li>Reducing screen time before bed</li>
<li>Keeping your sleep environment dark and quiet</li>
</ul>
<p>Quality sleep supports immune function, mood, metabolism, and overall longevity.</p>
<h2>5. Think Long-Term: Wellness Is a Journey, Not a Season</h2>
<p>Getting back on track is progress. Instead of asking &ldquo;How do I fix everything right now?&rdquo; try asking &ldquo;What habits support my health over the long run?&rdquo; This mindset shift supports sustainable wellness and helps prevent burnout from all-or-nothing thinking.</p>
<h2>Common Questions About Health and the Holidays</h2>
<p><strong>Is your health on track after the holidays?</strong><br>Health looks different for everyone. Feeling off after the holidays is normal. Small, consistent habits can help you regain balance.</p>
<p><strong>How do you stay healthy during the holiday season?</strong><br>Staying healthy often means prioritizing rest, hydration, movement, and stress management while allowing flexibility for enjoyment.</p>
<p><strong>How do you have a stress-free holiday season?</strong><br>While stress may not be avoidable, managing expectations, setting boundaries, and caring for your mental well-being can make a meaningful difference.</p>
<p><strong>How do you navigate holiday health without guilt?</strong><br>By focusing on long-term wellness rather than short-term perfection. Health is built over time.</p>
<p><strong>Is post-holiday fatigue common during Chicagoland winters?</strong><br>Yes. Shorter days, colder weather, and seasonal stress can affect energy levels and routines. Many people in Illinois experience this shift, making gentle wellness resets especially important.</p>
<h2>Your Partner in Long-Term Wellness</h2>
<p>At Healthonomic, our approach to wellness is shaped by the people and communities we serve across southern Cook County. We understand the unique challenges of urban living, from high-stress work environments to seasonal weather changes, and how they can impact long-term health. Our focus is on preventive, whole-person care; building sustainable routines; and supporting long-term wellness and healthy aging.</p>
<div style="${CTA}">If you&rsquo;re located in southern Cook County and looking for a wellness-focused approach to care, Healthonomic is here to partner with you. <a href="https://livewell.aah.org/chart/Authentication/Login" target="_blank" rel="noopener">Schedule a telemedicine appointment</a> or <a href="#/contact">visit us at one of our clinics &rarr;</a></div>
<p style="${DISC}">This content is for general informational and educational purposes only and does not constitute medical advice. Always consult a qualified healthcare provider before making changes to your health routine. &copy; 2026 Healthonomic Primary Care. All rights reserved.</p>`
  };

  B['holiday-health-tips-gratitude-stress-management-telemedicine-support'] = {
    image: '/assets/uploads/stay-warm-during-winter.webp',
    body: `
<p>As the holidays approach, a time for <strong>gratitude, connection, and focusing on well-being</strong> both for ourselves and our loved ones, the team at <strong>Healthonomic Primary Care</strong> wants to express our deep appreciation. We are grateful for the trust you place in us with your health. Your commitment to wellness, your personal stories, and your resilience inspire us every day.</p>
<p>While the holiday season is often joyful, it also presents distinct challenges. Increased stress, disruptions to routine, and difficulties with sleep, mood, or managing consumption of food and alcohol are common. For individuals managing <strong>chronic conditions</strong> like diabetes, high blood pressure, or anxiety, these seasonal shifts can make health management significantly harder.</p>
<p>Please remember: <strong>you are not alone</strong>. We are here and ready to support you through the season.</p>
<h2>Gratitude, Connection, and Health During the Holidays</h2>
<h3>Managing Stress, Sleep, and Mood During the Holidays</h3>
<p>During the busy holiday season, it&rsquo;s normal for stress to rise and routines to shift. Sleep patterns may be disrupted, energy levels may dip, and mood fluctuations are common. If you&rsquo;re wondering, <em>&ldquo;How can I manage stress, sleep, and mood during the holidays?&rdquo;</em>, consider:</p>
<ul>
<li>Setting aside short daily breaks for relaxation or meditation</li>
<li>Maintaining a consistent sleep schedule</li>
<li>Planning healthy meals to stabilize energy and mood</li>
</ul>
<p>Even small adjustments can help you feel more in control and present this season.</p>
<h2>How Telemedicine Can Support Your Health Goals</h2>
<p>This year, we&rsquo;ve expanded our <strong>telemedicine program</strong>, making it easier to connect with your care team wherever you are. Telemedicine appointments provide convenient access to care for patients managing:</p>
<ul>
<li><strong>Behavioral health</strong> (stress, anxiety, mood, sleep)</li>
<li><strong>Nutrition and weight management</strong></li>
<li><strong>Medication reviews and chronic condition management</strong></li>
<li><strong>Lifestyle and longevity coaching</strong></li>
</ul>
<p>Telemedicine makes it possible to connect with your provider immediately, whether you are at home, on a break, or traveling for the holidays. This flexibility allows you to maintain your <strong>holiday wellness goals</strong> regardless of your busy schedule.</p>
<div style="${CTA}"><a href="https://livewell.aah.org/chart/Authentication/Login" target="_blank" rel="noopener"><strong>Learn more about our telemedicine program &rarr;</strong></a></div>
<h2>Maintaining Health During the Holidays: 5 Essential Tips</h2>
<ol>
<li><strong>Prioritize Self-Care (Sleep &amp; Stress):</strong> Ensure consistent sleep patterns, schedule time for relaxation and breaks, and practice daily gratitude to manage stress effectively.</li>
<li><strong>Strategic Eating (Meals &amp; Snacks):</strong> Avoid skipping meals. Choose balanced, nutritious options to maintain steady energy levels and manage blood sugar.</li>
<li><strong>Stay Active (Movement):</strong> Incorporate movement into your day, even if it&rsquo;s just a short walk, to boost your mood and energy.</li>
<li><strong>Connect with Your Provider (Telemedicine):</strong> Use telemedicine appointments for ongoing care or to address any health concerns with your healthcare provider.</li>
<li><strong>Reflect and Appreciate (Gratitude):</strong> Take a moment each day to appreciate your health, progress, and connections.</li>
</ol>
<h2>Supporting Your Health from Home or On the Go</h2>
<p>Wondering, <em>&ldquo;How can I stay healthy while traveling or visiting family this holiday season?&rdquo;</em></p>
<ul>
<li>Bring balanced snacks to prevent overeating or energy crashes</li>
<li>Drink plenty of water and moderate alcohol or sugary beverages</li>
<li>Keep a mini health journal to track sleep, mood, and energy levels</li>
</ul>
<p>Even simple steps like these help you enjoy the season while managing <strong>chronic conditions</strong> and staying aligned with your wellness goals.</p>
<h2>Connection and Gratitude: Your Holiday Well-being</h2>
<p>The holidays are a time for connection, extending beyond just food and festivities. Prioritizing social connection supports mental well-being and can help minimize stress during a busy time. Make an effort to engage in meaningful conversations, share moments of gratitude, or simply reach out to loved ones.</p>
<p>Remember, your <strong>health is a priority</strong>. Seeking support or making mindful choices doesn&rsquo;t mean you have to miss out. You can enjoy the celebrations, connect with others, and feel your best, all simultaneously.</p>
<h2>How Healthonomic Primary Care Supports You</h2>
<p>At our locations in <strong>Orland Park, Palos Heights, and Evergreen Park</strong>, we provide:</p>
<ul>
<li>Same-day appointments when your health needs shift</li>
<li>Team-based care with physicians, nurse practitioners, and care coordinators</li>
<li>Integrated management of chronic conditions</li>
<li>Guidance that prioritizes prevention, customized to the seasonal flow of the Chicago suburbs</li>
</ul>
<div style="${CTA}">If you&rsquo;re looking for guidance this holiday season, schedule a telemedicine appointment or visit us at one of our clinics. We&rsquo;re here to partner with you every step of the way. <a href="#/contact">Book a telemedicine appointment today &rarr;</a></div>`
  };

  B['how-much-soda-is-too-much-for-your-blood-sugar'] = {
    image: '/assets/uploads/soda.webp',
    body: `
<h2>Exploring the Impact of Sugary Drinks on Your Health</h2>
<p>When it comes to managing blood sugar levels, particularly for individuals with diabetes, what you consume plays a crucial role. While soda isn&rsquo;t the sole culprit behind blood sugar spikes, its high sugar content can contribute significantly to fluctuations in glucose levels. Here, we&rsquo;ll delve into how soda affects your blood sugar, commonly asked questions about diabetes and soda consumption, and offer insights for healthier choices.</p>
<h2>Understanding the Impact of Soda on Blood Sugar</h2>
<p><strong>Why does soda affect blood sugar?</strong><br>Sodas, especially regular varieties, contain high levels of sugars such as high-fructose corn syrup. These sugars are quickly absorbed into the bloodstream, leading to rapid increases in blood glucose. Those with diabetes or insulin resistance may find it difficult to control these spikes efficiently.</p>
<p><strong>How much soda is really too much?</strong><br>Expert recommendations generally advise limiting sugar intake as much as possible. For someone with diabetes, even small amounts of soda can lead to noticeable changes in blood sugar. The American Diabetes Association suggests steering clear of sugary drinks entirely due to their impact on overall health, advocating for water or zero-calorie beverages instead.</p>
<h2>Commonly Asked Questions about Diabetes and Soda</h2>
<p><strong>Can drinking soda cause diabetes?</strong><br>While drinking soda itself doesn&rsquo;t cause diabetes, excessive consumption of sugary beverages can lead to weight gain and insulin resistance, which are risk factors for developing type 2 diabetes.</p>
<p><strong>How does diet soda fit into sugar and diabetes discussions?</strong><br>Although diet sodas are marketed as sugar-free, research indicates potential negative health effects and a possible link to metabolic issues. It&rsquo;s still crucial to consume them in moderation and pay attention to overall dietary habits.</p>
<p><strong>Are fruit-flavored sodas any better for blood sugar?</strong><br>Unfortunately, fruit-flavored sodas can be misleading. Despite their fruity taste, they often contain just as much sugar as regular sodas and may not be any healthier for blood sugar control.</p>
<h2>A Tip for Healthier Habits</h2>
<p><strong>Try Infused Water as a Refreshing Alternative.</strong> If you&rsquo;re looking to cut down on soda consumption but miss the flavor, consider switching to infused water. Add fresh fruits like lemon, berries, or cucumber to a pitcher of water for a naturally sweet and refreshing drink. It&rsquo;s a simple step towards improved hydration and better blood sugar management.</p>
<p>By understanding the impact of soda on your blood sugar and exploring healthier alternatives, you can take meaningful steps toward better health and diabetes management. Remember, even small changes can lead to significant improvements!</p>
<div style="${CTA}"><strong>Managing diabetes or blood sugar in Cook County?</strong> Our Healthonomic team offers personalized diabetes management at all three locations. <a href="#/service/diabetes">Explore our Diabetes Management services &rarr;</a></div>
<p style="${SRC}"><em>Source: <a href="https://www.diabetes.org/" target="_blank" rel="noopener">American Diabetes Association</a></em></p>`
  };

  B['the-role-of-technology-in-managing-chronic-conditions'] = {
    image: '/assets/uploads/mobile-scrolling.webp',
    body: `
<p>Managing chronic conditions can feel overwhelming, but recent advancements in technology have made it easier than ever. Mobile health apps, remote monitoring, and telehealth offer tools that simplify tracking your health and staying connected with your care team. These technologies enable earlier intervention and better management of chronic conditions such as diabetes, hypertension, and heart disease.</p>
<div style="${INFO}"><strong>Tip:</strong> <em>Start using health tracking apps to monitor things like medication schedules, daily steps, or glucose levels.</em></div>
<h2>Personalized Care With Mobile Health Apps</h2>
<p>Health apps are a game-changer when it comes to personalized chronic care management. Features like medication alerts, progress tracking, and customized health goals empower users to stick with their care plans. <strong>The LiveWell app</strong>, designed specifically for chronic condition management, takes this a step further by offering seamless organization, habit tracking, and personalized insights.</p>
<div style="${INFO}"><strong>Tip:</strong> <em>Try adding alarms to your health app for key tasks like remembering to check your vitals. It&rsquo;s a quick fix with big benefits over time.</em></div>
<h2>Real-Time Monitoring to Improve Care</h2>
<p>Wearables and connected devices allow real-time tracking of vitals such as blood pressure, heart rate, and blood sugar. This data can be automatically transmitted to healthcare providers, enabling them to detect issues early and adjust your treatment plan when needed. By pairing these devices with <strong>LiveWell</strong>, patients can see a comprehensive view of their health progress, making the app a powerful hub for chronic care management.</p>
<div style="${INFO}"><strong>Tip:</strong> <em>Choose devices compatible with your health app to simplify syncing and data sharing.</em></div>
<h2>Telehealth: Breaking Barriers in Care Accessibility</h2>
<p>For people managing chronic illnesses, telehealth offers both convenience and consistency for staying in touch with their care providers. Virtual appointments ensure follow-ups are accessible from anywhere &mdash; saving time and effort. <strong>The LiveWell app</strong> enhances this process by integrating telehealth features alongside tracking tools, so your entire care journey is organized in one user-friendly hub.</p>
<div style="${INFO}"><strong>Tip:</strong> <em>Keep a list of questions or symptoms to discuss during your virtual appointments to make the most out of telehealth care.</em></div>
<h2>Why LiveWell is the Top Choice for Chronic Care Management</h2>
<p>While many apps assist in managing chronic conditions, <strong>the LiveWell app</strong> stands out as an all-in-one health management tool. Combining habit-tracking, remote monitoring integration, and telehealth access, LiveWell offers a comprehensive solution to simplifying chronic care. Its personalized approach helps ensure you&rsquo;re always one step ahead in managing your health.</p>
<div style="${CTA}">Download the <a href="https://livewell.aah.org/chart/Authentication/Login" target="_blank" rel="noopener">LiveWell app</a> today and start by setting small, achievable health goals to build positive progress!</div>`
  };

  B['top-uv-safety-tips-how-to-protect-your-skin-and-eyes-from-harmful-summer-sun'] = {
    image: '/assets/uploads/sunscreen.webp',
    body: `
<p>Summer is synonymous with outdoor fun, but it also brings increased exposure to harmful ultraviolet (UV) radiation. Prolonged UV exposure can result in skin damage, premature aging, eye problems, and even skin cancer. This blog provides actionable UV safety tips to keep you safe while enjoying the sunshine. Ready to protect yourself? Read on for simple, life-saving advice.</p>
<h2>1. Wear Sunscreen Daily</h2>
<p>Sunscreen is your skin&rsquo;s best defense against harmful UV rays. Apply a broad-spectrum sunscreen with an SPF of at least 30 before stepping outside, even on cloudy days. Sunscreens shield your skin from both UVA rays (that age your skin) and UVB rays (that encourage burns). For maximum protection, reapply at least every two hours, or immediately after sweating or swimming. Consistent sunscreen use is a proven way to lower your risk of skin cancer and sun-related aging over time.</p>
<p style="font-size:14px;color:#5278B1;margin:-8px 0 22px;"><em><strong>Tip:</strong> Opt for sunscreen products labeled &ldquo;water-resistant&rdquo; and carry a travel-sized sunscreen in your bag for easy reapplication.</em> <a href="https://www.skincancer.org/" target="_blank" rel="noopener">Source: Skin Cancer Foundation</a></p>
<h2>2. Cover Up with Protective Clothing</h2>
<p>Did you know what you wear can help protect your skin? Lightweight, tightly woven clothing can block UV rays effectively. Consider wearing long-sleeved shirts, pants, and a wide-brimmed hat to shield sensitive areas like your face and neck. Many brands now offer sun-protective clothing with a UPF (Ultraviolet Protection Factor) rating, specifically designed to block UV radiation. It&rsquo;s a stylish and practical way to stay safe under the sun.</p>
<p style="font-size:14px;color:#5278B1;margin:-8px 0 22px;"><em><strong>Tip:</strong> Dark-colored fabrics and thicker materials generally offer more UV protection than light or sheer clothing.</em> <a href="https://www.cancer.gov/" target="_blank" rel="noopener">Source: National Cancer Institute</a></p>
<h2>3. Use Quality Sunglasses to Protect Your Eyes</h2>
<p>UV rays don&rsquo;t just harm your skin &mdash; they can also severely damage your eyes. Prolonged exposure increases your risk of developing cataracts, macular degeneration, and other vision-related issues. By investing in high-quality sunglasses that block 100% of UVA and UVB rays, you can protect your eyes while adding a chic accessory to your look. Wraparound sunglasses are especially effective since they reduce side exposure.</p>
<p style="font-size:14px;color:#5278B1;margin:-8px 0 22px;"><em><strong>Tip:</strong> Look for sunglasses marked with &ldquo;UV400&rdquo; or opt for polarized lenses to reduce glare and ensure maximum protection.</em> <a href="https://www.mayoclinic.org/" target="_blank" rel="noopener">Source: Mayo Clinic</a></p>
<h2>4. Seek Shade During Peak Hours</h2>
<p>The sun&rsquo;s UV rays are strongest between 10 a.m. and 4 p.m. During these hours, aim to stay in shaded areas whenever possible. Sitting under a tree, umbrella, or shelter can significantly reduce UV exposure when combined with sunscreen and protective attire. This habit isn&rsquo;t just practical &mdash; it&rsquo;s smart prevention against sunburn and long-term skin damage.</p>
<p style="font-size:14px;color:#5278B1;margin:-8px 0 22px;"><em><strong>Tip:</strong> Use a UV index app or tool to monitor daily UV radiation levels and plan outdoor activities accordingly.</em> <a href="https://www.aad.org/" target="_blank" rel="noopener">Source: American Academy of Dermatology</a></p>
<h2>5. Avoid Tanning Beds</h2>
<p>Tanning beds expose your skin to intense UV radiation that can be up to 10 times stronger than the sun&rsquo;s rays. Frequent use increases your likelihood of developing skin cancer, including melanoma. Instead, opt for self-tanning products that offer a safe, UV-free glow. Embrace this alternative and protect your skin without compromising your style.</p>
<p style="font-size:14px;color:#5278B1;margin:-8px 0 22px;"><em><strong>Tip:</strong> Always read reviews before choosing a self-tanning product to ensure it delivers the natural look you&rsquo;re aiming for.</em> <a href="https://www.cdc.gov/" target="_blank" rel="noopener">Source: CDC</a></p>
<h2>6. Perform Regular Skin Checks</h2>
<p>Early detection saves lives. Make it a habit to examine your skin once a month for any unusual changes, such as new moles, discolorations, or spots that itch, bleed, or don&rsquo;t heal. Annual dermatologist visits are vital for spotting potential issues early, especially if you&rsquo;re at higher risk due to fair skin, a family history of cancer, or excessive UV exposure.</p>
<p style="font-size:14px;color:#5278B1;margin:-8px 0 22px;"><em><strong>Tip:</strong> Use a smartphone app to keep track of changes to moles and document your skin checks for future reference.</em> <a href="https://www.skincancer.org/" target="_blank" rel="noopener">Source: Skin Cancer Foundation</a></p>
<h2>Conclusion: Stay Safe While Enjoying the Sunshine</h2>
<p>Taking UV safety seriously can save your skin &mdash; and your life. Whether you&rsquo;re applying sunscreen, donning protective clothing, or staying in the shade, small actions make a big impact. Don&rsquo;t let UV rays hold you back from enjoying your favorite summer activities. Prioritize safety and live each sunny day to the fullest!</p>
<div style="${CTA}"><strong>Due for a skin check or wellness visit?</strong> Our Healthonomic team is here to help you stay ahead of sun-related risks. <a href="#/service/check-ups">Learn about our Wellness Check-Ups &rarr;</a></div>
<p style="${SRC}"><em>Sources: Skin Cancer Foundation &middot; National Cancer Institute &middot; Mayo Clinic &middot; American Academy of Dermatology &middot; CDC.</em></p>`
  };

  B['prostate-cancer-risks-diagnosis-treatment-and-prevention'] = {
    image: '/assets/uploads/doctor-with-patient.webp',
    body: `
<p style="font-size:13px;font-weight:700;letter-spacing:1px;color:#5278B1;text-transform:uppercase;margin:0 0 18px;">Prostate Health Tips from Dr. Lentzou</p>
<p>Prostate cancer remains one of the most common cancers for men worldwide, and understanding the risks, treatments, and prognosis can help you take charge of your health. In this guide, we&rsquo;ll cover the factors that increase your risk, current treatment options, survival rates, and actionable tips for prevention.</p>
<h2>What Are the Risk Factors for Prostate Cancer?</h2>
<p>If you&rsquo;re wondering, &ldquo;What increases my risk of prostate cancer?&rdquo; you&rsquo;re not alone. Though many men are diagnosed with prostate cancer each year, certain factors make the likelihood of developing it higher.</p>
<ol>
<li><strong>Age:</strong> Prostate cancer risk increases significantly after age 50, with the majority of cases occurring in men aged 65 and older.</li>
<li><strong>Race and Ethnicity:</strong> African American men are more likely to develop prostate cancer compared to men of other races, and it is often more aggressive and diagnosed at later stages.</li>
<li><strong>Family History:</strong> Genetics play a role. If your father, brother, or male relative had prostate cancer, your own risk increases. Inherited mutations such as <strong>BRCA1</strong> or <strong>BRCA2</strong> are linked to a higher chance of developing prostate cancer.</li>
<li><strong>Lifestyle:</strong> A diet high in red meat and low in fruits and vegetables may elevate risks. Being overweight, smoking, and leading a sedentary lifestyle are potential contributors as well.</li>
<li><strong>Geography:</strong> Men in North America, Australia, and Northern and Western Europe have higher rates of prostate cancer than those in Asia, Africa, and Central America.</li>
</ol>
<p>Understanding these risks can empower you to make informed decisions. Regular check-ups are crucial to assess your individual risks &mdash; early detection can save lives.</p>
<h2>How Is Prostate Cancer Diagnosed?</h2>
<p>Prostate cancer is often detected through the following tools:</p>
<ul>
<li><strong>PSA Test:</strong> A blood test that measures <strong>prostate-specific antigen (PSA)</strong> levels. High PSA levels signal potential cancer but may also indicate non-cancerous conditions like prostatitis.</li>
<li><strong>Digital Rectal Exam (DRE):</strong> Your doctor examines the prostate for abnormalities or lumps.</li>
<li><strong>Biopsy:</strong> If imaging or blood tests suggest prostate cancer, tissue samples are taken to confirm the diagnosis.</li>
</ul>
<p>Early-stage prostate cancer often has no symptoms, which makes routine screenings critical, especially for men over 50 or those at higher risk.</p>
<h2>What Treatment Options Are Available for Prostate Cancer?</h2>
<p>The best treatment depends on the cancer&rsquo;s stage and your overall health. The major approaches include:</p>
<ol>
<li><strong>Active Surveillance:</strong> For low-risk cancers that grow slowly, doctors may advise monitoring through regular PSA tests and biopsies rather than immediate treatment.</li>
<li><strong>Surgery:</strong> Procedures like a <strong>radical prostatectomy</strong> remove the prostate gland. Surgery is ideal during early stages where cancer hasn&rsquo;t spread beyond the prostate.</li>
<li><strong>Radiation Therapy:</strong> External beam or brachytherapy (internal radiation) target cancer cells effectively.</li>
<li><strong>Hormone Therapy:</strong> Recommended for advanced cases, hormone therapy helps control the growth of cancer cells by lowering testosterone levels.</li>
<li><strong>Chemotherapy and Immunotherapy:</strong> In advanced stages, these systemic treatments aim to manage symptoms and slow disease progression.</li>
<li><strong>New Therapies:</strong> Emerging options like prostate cancer vaccines and targeted therapies are being explored to improve survival rates and quality of life.</li>
</ol>
<p>Your doctor will weigh factors such as the cancer&rsquo;s grade and stage, PSA levels, and your overall condition before recommending treatment.</p>
<h2>What Is the Prognosis for Prostate Cancer?</h2>
<p>Is prostate cancer curable? For many men, <strong>yes</strong> &mdash; especially for cancers caught in the early stages. Here&rsquo;s what studies show:</p>
<ul>
<li><strong>Early Detection Success:</strong> Nearly <strong>100%</strong> of men diagnosed at stages I or II survive five years or more.</li>
<li><strong>Localized Spread (Stage III):</strong> Treatment can still be effective, with many patients achieving long survival periods.</li>
<li><strong>Advanced Stage (Stage IV):</strong> While more challenging, new therapies like targeted medications and improved hormone therapies have drastically increased survival rates and quality of life.</li>
</ul>
<p>Results vary based on cancer aggressiveness, PSA levels, and response to treatment, emphasizing the importance of individualized healthcare.</p>
<h2>Prostate Cancer Prevention: Steps You Can Take Today</h2>
<ol>
<li><strong>Get Screened:</strong> PSA screening should be tailored to your age, family history, and overall risk. Talk to your doctor about when to start screenings.</li>
<li><strong>Eat a Heart-Healthy Diet:</strong> Limit red meats and processed foods while boosting fruits, vegetables, and whole grains. Include antioxidant-rich foods like tomatoes and green tea.</li>
<li><strong>Stay Active:</strong> Regular exercise helps maintain a healthy weight and supports hormonal balance.</li>
<li><strong>Quit Smoking:</strong> Avoiding or quitting smoking reduces inflammation, which may play a role in cancer progression.</li>
<li><strong>Be Proactive About Symptoms:</strong> Report any urinary problems, pain, or unusual symptoms immediately.</li>
</ol>
<h2>The Bottom Line</h2>
<p>Prostate cancer is manageable, with high survival rates when detected early. Staying informed, adopting a healthy lifestyle, and prioritizing regular check-ups can make a significant difference. If you&rsquo;re worried about prostate issues, start by asking your doctor about PSA testing and maintaining regular screenings. Proactive care leads to better outcomes.</p>
<div style="${CTA}"><strong>Time for a check-up?</strong> Our Healthonomic providers can talk you through PSA screening and proactive men&rsquo;s health. <a href="#/service/check-ups">Learn about our Wellness Check-Ups &rarr;</a></div>
<p style="${SRC}"><em>References: American Cancer Society &middot; Mayo Clinic &middot; National Cancer Institute.</em></p>`
  };

  B['why-preventive-care-is-essential-for-your-health-key-tips-for-disease-prevention-and-healthier-living'] = {
    image: '/assets/uploads/blood-pressure-monitoring.webp',
    body: `
<p>Preventive care stands as the cornerstone of modern healthcare, essential for avoiding illnesses and long-term health complications. At Healthonomic Primary Care, we recognize the profound impact of proactive healthcare in saving lives and reducing costs associated with chronic conditions.</p>
<h2>Understanding Preventive Services</h2>
<p>Preventative measures, such as annual <strong>wellness check-ups, routine health screenings, and vaccinations, empower individuals</strong> to take command of their health. The Centers for Disease Control and Prevention highlights early detection&rsquo;s key role in preventing life-threatening illnesses.</p>
<p style="font-size:14px;color:#5278B1;margin:-8px 0 22px;"><em><strong>Tip:</strong> Schedule yearly physicals to catch potential health issues early. According to the CDC, early detection is key to preventing life-threatening illnesses.</em></p>
<h2>Managing Chronic Conditions Through Preventive Care</h2>
<p>Chronic illnesses such as <strong>diabetes</strong>, <strong>heart disease</strong>, and <strong>arthritis</strong> can often be managed through preventative measures like routine monitoring, targeted lifestyle changes, and timely interventions. Healthonomic Primary Care specializes in managing chronic conditions, taking a stronger approach to help patients live healthier lives long-term.</p>
<p style="font-size:14px;color:#5278B1;margin:-8px 0 22px;"><em><strong>Tip:</strong> Monitor your blood pressure regularly to avoid complications. According to the American Heart Association, routine checks can significantly reduce the risk of heart disease.</em></p>
<h2>The Role of Nutrition and Exercise in Preventive Care</h2>
<p>Proper nutrition and physical activity are vital components of preventive care. A balanced diet and regular exercise can help prevent conditions such as <strong>obesity</strong>, <strong>hypertension</strong>, and even mental health disorders like <strong>depression</strong>. Healthonomic Primary Care emphasizes lifestyle education to guide patients in making healthier daily choices.</p>
<p style="font-size:14px;color:#5278B1;margin:-8px 0 22px;"><em><strong>Tip:</strong> Introduce whole grains, fruits, and vegetables into your meals while staying active for 30 minutes a day. Research shows that healthy eating habits reduce the risk of chronic diseases.</em></p>
<h2>Preventing Respiratory Disorders with Regular Check-Ups</h2>
<p>Respiratory conditions like <strong>asthma</strong> and <strong>COPD</strong> can worsen when neglected, but regular check-ups can prevent severe complications. At Healthonomic Primary Care, our team is equipped to diagnose and manage respiratory issues using cutting-edge diagnostic tools and personalized treatment plans.</p>
<p style="font-size:14px;color:#5278B1;margin:-8px 0 22px;"><em><strong>Tip:</strong> If you have asthma, carry an inhaler and consult your primary care physician to adjust your treatment plan regularly. Routine check-ins can improve symptom management.</em></p>
<h2>Empowering Women&rsquo;s Health Through Preventive Care</h2>
<p>Women&rsquo;s health requires special attention, including regular screenings for <strong>breast cancer</strong>, <strong>PAP smears</strong>, and <strong>bone density tests</strong>. Preventive care ensures early detection and treatment of conditions specific to women&rsquo;s health needs.</p>
<p style="font-size:14px;color:#5278B1;margin:-8px 0 22px;"><em><strong>Tip:</strong> Schedule your mammogram every 1&ndash;2 years once you hit your 40s. The American Cancer Society highlights that early detection increases survival rates.</em></p>
<h2>Disease Prevention Starts with Vaccination</h2>
<p>Vaccines are one of the most effective preventative measures in healthcare, protecting against diseases such as <strong>influenza</strong>, <strong>COVID-19</strong>, and <strong>pneumonia</strong>. Vaccination is a critical service offered at Healthonomic Primary Care to keep both individuals and communities safe from infectious diseases.</p>
<p style="font-size:14px;color:#5278B1;margin:-8px 0 22px;"><em><strong>Tip:</strong> Stay up to date on flu and COVID-19 vaccinations annually. The World Health Organization underscores vaccination as a top priority for public health.</em></p>
<h2>Building Better Health with Healthonomic Primary Care</h2>
<p>At Healthonomic Primary Care, our expert providers prioritize patient-centered preventive care. Whether through wellness <strong>check-ups</strong> or <strong>chronic disease management</strong>, we are committed to <strong>long-term health</strong> empowerment.</p>
<h3>Taking the First Step</h3>
<p>Preventive care is about living healthier and happier lives. Take control today by <strong>scheduling a check-up or committing to healthier living practices</strong>. Small, consistent changes lead to substantial results, according to the CDC&rsquo;s findings.</p>
<h2>Final Thoughts</h2>
<p>Proactive healthcare not only prevents diseases but also fosters a lifestyle of wellness. Healthonomic Primary Care is dedicated to supporting every step of your health journey. Start small &mdash; make one small change today toward preventative care, whether it&rsquo;s scheduling a check-up or committing to a healthier meal.</p>
<div style="${CTA}"><strong>Ready to be proactive about your health?</strong> Book a wellness check-up with our Healthonomic team today. <a href="#/service/check-ups">Learn about our Wellness Check-Ups &rarr;</a></div>
<p style="${SRC}"><em>Sources: CDC &middot; American Heart Association &middot; American Cancer Society &middot; World Health Organization &middot; National Institute on Aging.</em></p>`
  };

  B['easy-ways-to-track-and-improve-your-personal-health-metrics-for-better-wellness'] = {
    image: '/assets/uploads/health-checking.webp',
    body: `
<p>Maintaining good health isn&rsquo;t just about feeling great, it&rsquo;s about taking proactive steps to monitor and improve your overall well-being. Tracking your personal health metrics gives you a clear picture of your health and empowers you to make informed decisions to optimize it. In this guide, we&rsquo;ll share five practical ways to track and improve your health metrics for a healthier, happier you.</p>
<h2>1. Monitor Your Blood Pressure Regularly</h2>
<p><strong>Why it matters:</strong> Blood pressure is a critical indicator of cardiovascular health. High blood pressure (hypertension) can lead to serious health issues like heart disease and stroke, making it essential to track it regularly.</p>
<p><strong>How to track:</strong></p>
<ul>
<li>Use a home blood pressure monitor; brands like Omron offer easy-to-use devices that give accurate readings.</li>
<li>Keep a log of your readings, noting the date and time of each measurement to spot trends and patterns.</li>
<li>Aim to take your measurements at the same time each day to ensure consistency.</li>
</ul>
<p><strong>How to improve:</strong></p>
<ul>
<li>Reduce sodium intake: avoid processed foods and add more fresh vegetables to your diet.</li>
<li>Exercise regularly: aim for at least 150 minutes of moderate aerobic activity per week.</li>
<li>Manage stress through relaxation techniques like deep breathing or meditation.</li>
</ul>
<p style="font-size:14px;color:#5278B1;margin:-8px 0 22px;"><em>Tip: According to the American Heart Association, tracking your blood pressure regularly can reduce your risk of stroke by 20%.</em></p>
<h2>2. Keep an Eye on Your Heart Rate</h2>
<p><strong>Why it matters:</strong> Your heart rate offers insight into your cardiovascular fitness and overall health. A consistently high or low heart rate could indicate underlying health issues.</p>
<p><strong>How to track:</strong></p>
<ul>
<li>Use a wearable fitness tracker (like a Fitbit or Apple Watch) to track your heart rate throughout the day.</li>
<li>Alternatively, check your pulse manually at your wrist or neck for a quick measurement.</li>
</ul>
<p><strong>How to improve:</strong></p>
<ul>
<li>Engage in regular aerobic exercise: walking, running, or cycling can strengthen your heart and improve overall fitness.</li>
<li>Limit caffeine and alcohol: both can cause fluctuations in heart rate.</li>
<li>Ensure adequate sleep: a good night&rsquo;s rest helps regulate your heart rate and reduce stress.</li>
</ul>
<p style="font-size:14px;color:#5278B1;margin:-8px 0 22px;"><em>Tip: The National Heart, Lung, and Blood Institute recommends moderate exercise as one of the best ways to improve your heart rate and cardiovascular health.</em></p>
<h2>3. Monitor Your Body Mass Index (BMI)</h2>
<p><strong>Why it matters:</strong> BMI is a useful indicator to help you understand if you&rsquo;re within a healthy weight range. Being overweight or underweight can significantly impact your health, affecting everything from blood pressure to cholesterol levels.</p>
<p><strong>How to track:</strong></p>
<ul>
<li>Calculate your BMI using your height and weight with a <a href="https://www.nhlbi.nih.gov/health/educational/lose_wt/BMI/bmi-m.htm" target="_blank" rel="noopener">BMI calculator</a>.</li>
<li>Record your BMI regularly to track any changes over time.</li>
</ul>
<p><strong>How to improve:</strong></p>
<ul>
<li>Follow a balanced diet: include more fruits, vegetables, lean proteins, and whole grains.</li>
<li>Exercise regularly: combine aerobic and strength training to build muscle and burn fat.</li>
<li>Consult with a healthcare professional to set realistic goals and monitor progress.</li>
</ul>
<p style="font-size:14px;color:#5278B1;margin:-8px 0 22px;"><em>Tip: The CDC suggests that maintaining a healthy BMI can help reduce the risk of developing chronic diseases like diabetes and heart disease.</em></p>
<h2>4. Track Your Sleep Patterns</h2>
<p><strong>Why it matters:</strong> Quality sleep is essential for both physical and mental health. Poor sleep affects everything from mood to immune function, so tracking your sleep can provide valuable insights into how well your body is recovering each night.</p>
<p><strong>How to track:</strong></p>
<ul>
<li>Use a sleep tracker (such as the Oura Ring or Fitbit) to monitor your sleep cycles.</li>
<li>Keep a sleep journal noting your bedtime, wake-up time, and sleep quality to identify patterns or disturbances.</li>
</ul>
<p><strong>How to improve:</strong></p>
<ul>
<li>Establish a regular sleep schedule: go to bed and wake up at the same time every day, even on weekends.</li>
<li>Create a relaxing environment: keep your bedroom cool, dark, and free from distractions.</li>
<li>Limit screen time before bed: blue light from phones and computers can interfere with falling asleep.</li>
</ul>
<p style="font-size:14px;color:#5278B1;margin:-8px 0 22px;"><em>Tip: According to the National Sleep Foundation, getting 7&ndash;9 hours of sleep per night can improve your cognitive function and overall health.</em></p>
<h2>5. Record Your Daily Physical Activity</h2>
<p><strong>Why it matters:</strong> Physical activity is crucial for maintaining good health. It helps with weight management, cardiovascular health, mental well-being, and more.</p>
<p><strong>How to track:</strong></p>
<ul>
<li>Use a fitness tracker or smartphone app (such as MyFitnessPal or Google Fit) to log daily steps and workouts.</li>
<li>Alternatively, maintain a physical activity diary recording the type, duration, and intensity of your exercises.</li>
</ul>
<p><strong>How to improve:</strong></p>
<ul>
<li>Set daily or weekly activity goals: for example, 10,000 steps a day or 30 minutes of exercise, five times a week.</li>
<li>Diversify your workouts: include aerobic, strength, and flexibility exercises to work different muscle groups.</li>
<li>Find a workout buddy: exercise with a friend or join a fitness class to stay motivated.</li>
</ul>
<p style="font-size:14px;color:#5278B1;margin:-8px 0 22px;"><em>Tip: The World Health Organization recommends adults get at least 150 minutes of moderate-intensity physical activity per week.</em></p>
<p>Tracking and improving your personal health metrics is one of the most effective ways to take control of your well-being. By monitoring key indicators such as blood pressure, heart rate, and sleep patterns, you gain valuable insights into areas for improvement. Remember, consistency is key. Start small, track your progress, and celebrate each milestone along the way.</p>
<div style="${CTA}"><strong>Want to get started on your health journey?</strong> Our team offers personalized health tracking and expert guidance. <a href="#/contact">Contact us today &rarr;</a></div>`
  };

  B['8-healthy-foods-that-are-actually-bad-for-you'] = {
    image: '/assets/uploads/ProteinBarsIllinois.jpeg',
    body: `
<p>When choosing foods for a healthier diet, it is important for you to actually look at the ingredients and nutrients. It&rsquo;s easy to be fooled by foods that come off as nutritious when in reality, they could do more bad than good for you. We&rsquo;ve compiled a list of foods to avoid as well as healthier alternatives to help you start making healthier choices!</p>
<div style="${CTA}"><em>If you&rsquo;re ready to live your life to the fullest, then give our doctor&rsquo;s office a call at <a href="tel:7086711500">(708) 671-1500</a> to get started!</em></div>
<h2>Yogurt Parfait</h2>
<p>These sweet snacks are deemed a healthy option for the simple fact that they contain fruit and oats in the granola. But most parfaits contain sweetened fruit and sweetened granola, meaning sugar or honey was added. The more sugar you consume, the more your blood glucose will spike, making you feel tired or lethargic. Some healthy alternatives for a sweet snack include:</p>
<ul>
<li>Low-fat plain Greek yogurt with chia seeds</li>
<li>Fresh berries, bananas, and other whole fruit</li>
</ul>
<h2>Crunchy Snacks</h2>
<p>Crunchy snacks wouldn&rsquo;t be so bad if it weren&rsquo;t for all the salt and calories they offer instead of any actual nutritional value! Some popular crunchy snacks that people often mistake as healthy include:</p>
<ul>
<li>Pretzels</li>
<li>Popcorn</li>
<li>Trail mix</li>
<li>Veggie chips</li>
</ul>
<p>If you are craving a crunchy snack, a healthy alternative would be <strong>crunchy, raw vegetables</strong>. You can even use a little bit of <strong>peanut butter or hummus</strong> to act as a dip!</p>
<h2>Protein Bars</h2>
<p>To many people, it seems like chunks of fruit, nuts, and rolled oats can do no harm. The unfortunate truth is that protein bars and even granola bars contain high-fructose corn syrup and hydrogenated oils. Some foods that contain the same ingredients include soda, cookies, and cakes!</p>
<p>These ingredients can contribute to weight gain, <a href="#/service/diabetes">diabetes</a>, metabolic syndrome, and heart disease. To prevent these conditions, healthier options for when you&rsquo;re on the go include:</p>
<ul>
<li>Unsweetened dried fruit</li>
<li>Whole nuts and whole seeds</li>
</ul>
<h2>Multi-Grain Bread</h2>
<p>Multi-grain bread or seven-grain bread creates the misconception of being a healthy choice because they are nutrient-dense. While it is true that these bread products are full of whole grains, they have way more unbleached enriched wheat flour than anything else. The best kind of bread to eat is usually labeled as &ldquo;whole wheat.&rdquo; <strong>Whole ingredients</strong> are what you should aim for when buying healthier foods and produce!</p>
<h2>Veggie Dip</h2>
<p>Just because you can see a hint of green or leafy vegetables in a dip doesn&rsquo;t make it a healthy part of your meal or snack. Some of the <strong>unhealthiest dips</strong> you could be eating include:</p>
<ul>
<li>Spinach</li>
<li>Artichoke</li>
<li>Cucumber spreads</li>
</ul>
<p>This is because they are rich in saturated fats from the sour cream, cream cheese, mayonnaise, and other cheeses used to make these dips. If you have a craving for dips, you could try these healthier alternatives:</p>
<ul>
<li>Hummus (or bean-based dips)</li>
<li>Basil pesto</li>
<li>Cashew kimchi dip</li>
<li>Cashew cheese</li>
</ul>
<h2>Sports Drinks</h2>
<p>Even though you may have heard it a million times before, the best thing to drink to keep yourself hydrated is water. Many sports drinks, such as Gatorade or Powerade, have almost the same amount of sugar as soda. In addition, these beverages have potentially-carcinogenic artificial food coloring, meaning they can lead to behavioral problems, allergic reactions, and more health issues!</p>
<h2>Dried Fruit</h2>
<p>Dried fruit is a bit of a toss-up since it was once fresh fruit. Unlike fresh fruit, however, dried fruit lacks water-soluble nutrients, and it can be calorie-dense. Snacking on dried fruit sparingly should be fine, but it&rsquo;s necessary to be aware of the potential risks, which include weight gain and diabetes concerns. The best alternative is to eat whole, fresh fruits, such as:</p>
<ul>
<li>Bananas</li>
<li>Apples</li>
<li>Pears</li>
<li>Oranges</li>
<li>Berries</li>
</ul>
<h2>Canned Soup</h2>
<p>Canned soups may feel light on your stomach, but they are actually loaded with salt and sugar. Popular canned products such as Campbell&rsquo;s are tied to an increased risk of obesity and insulin resistance. It is best to ditch canned soups overall and <strong>make your own homemade soup</strong> consisting of vegetables such as:</p>
<ul>
<li>Garlic</li>
<li>Onion</li>
<li>Celery</li>
<li>Parsley</li>
<li>Chives</li>
</ul>
<h2>Learn How to Maintain a Healthy, Clean Diet with the Pros at Healthonomic</h2>
<p>If you want to make an effort to lead a healthier lifestyle but don&rsquo;t know where or how to start, you&rsquo;ve come to just the right place. The medical professionals at Healthonomic are here to help you reach your health goals.</p>
<div style="${CTA}"><a href="#/contact">Contact us today</a> by calling <a href="tel:7086711500">(708) 671-1500</a> to get started.</div>`
  };

  B['9-tips-for-a-healthy-morning-routine'] = {
    image: '/assets/uploads/2.jpeg',
    body: `
<p>Adhering to a healthy living routine is key to looking and feeling better. Truth be told, your morning routine can very well set the tone for the rest of your day. If your morning starts off wrong, chances are your entire day will follow a similar trajectory. But if you can discipline yourself to follow a healthy morning routine, you can set a positive start and keep it up throughout the day!</p>
<p>Simple activities such as stretching your muscles or being mindful when getting ready for work can make a world of a difference. Whatever your goals are, a productive and healthy morning routine can help you reach them.</p>
<h2>1) Give Yourself Enough Time for Self-Care</h2>
<p>Your body is a temple and it deserves some self-love! In order to check off all of your self-care tasks, try setting your alarm 10 to 15 minutes before the time you normally get up. This can help you make more time to wash up, brush your teeth, wash your face, and take care of all your personal hygiene needs!</p>
<h2>2) Make Your Bed</h2>
<p>While making your bed seems like an insignificant change, it can definitely affect the comfort you establish in your home. <a href="https://www.cnbc.com/2019/03/18/making-your-bed-first-thing-can-make-you-more-productive-all-day.html" target="_blank" rel="noopener">Studies</a> have shown that making your bed first thing in the morning can lead to more productivity and organization throughout the day. Not only that but who doesn&rsquo;t love coming home to a freshly made bed after a long day of work?</p>
<h2>3) Allow Natural Light Into Your Room</h2>
<p>If you have a hard time waking yourself up in the morning, allowing the sunshine into your room can help you. Our <a href="https://www.cancer.gov/publications/dictionaries/cancer-terms/def/circadian-rhythm" target="_blank" rel="noopener">circadian rhythms</a> are highly dependent on the sun, so exposing yourself to natural light is essential to feeling wide awake. Like this, you&rsquo;ll feel refreshed and ready to take on the day.</p>
<h2>4) Drink Water Before Anything Else</h2>
<p>Before consuming anything else you normally do in the morning (coffee, tea, juice), drink water. This is important to do when you wake up so that you hydrate your body first thing. Drinking water as soon as you wake up is also shown to <a href="https://selecthealth.org/blog/2018/01/4-ways-to-boost-your-metabolism" target="_blank" rel="noopener">support your metabolism</a>, helping you break down meals and burn calories throughout the day.</p>
<h2>5) Stretch or Exercise</h2>
<p>Exercise is always a good way to stay active and it benefits your cardiovascular health. Getting some exercise done in the morning can help you get your blood flowing. If you feel slow and sluggish during the day, it&rsquo;s time to get your body moving in the morning. Not a morning workout person? Not a problem! You can also get your blood flowing by doing a few simple stretches!</p>
<h2>6) Eat a Fulfilling Breakfast</h2>
<p>As the old adage goes, breakfast is the most important meal of the day. Skipping breakfast leads to feelings of irritability and will only make you feel hungrier throughout the day. It&rsquo;s difficult to stay focused and get work done when all you can think about is taking your next break.</p>
<p>Some of the healthiest foods you can eat in the morning include:</p>
<ul>
<li>Eggs</li>
<li>Greek yogurt</li>
<li>Oatmeal</li>
<li>Chia seeds</li>
<li>Berries</li>
<li>Whole wheat toast</li>
<li>Avocado toast</li>
</ul>
<h2>7) Go Over Your To-Do List</h2>
<p>It&rsquo;s easy to become overwhelmed when you have a long day ahead of you. Before heading off to work, look over your schedule so you are aware of the tasks and projects you have to complete. This also applies to house duties. If you have pending, timely tasks, move them to the top of your list to remind yourself to complete these errands.</p>
<h2>8) Set Realistic Expectations for Your Day</h2>
<p>Ideally, it feels good to be able to check off every task you had set for the day. Sometimes, that doesn&rsquo;t always happen, but you don&rsquo;t have to beat yourself up for it. In order to keep yourself from letting yourself down, make sure to realistically plan out your day. Consider how much time you have and then determine which tasks you can get done and what will have to be finished later on in the week.</p>
<h2>9) Be Mindful of Your Breathing Before Going Out</h2>
<p>You can&rsquo;t achieve healthy living routines without putting your mental health first. It is important to take a breath every now and then. Be present in the moment and catch your breath. To keep anxiety and stress at bay, take a couple of deep breaths, be aware of your surroundings, and pay attention to how your body feels. A little mindfulness and meditation can really go a long way in healthy living!</p>
<h2>Learn More About How to Make Every Day a Healthy Day</h2>
<p>If you are ready to start your healthy living journey, you&rsquo;ve come to just the right place. Healthonomic has professionals all across Illinois including Evergreen Park, Palos Heights, and Orland Park. We are here to help and support patients everywhere!</p>
<div style="${CTA}">Give us a call today at <a href="tel:7086711500">708-671-1500</a> to make an appointment, or <a href="#/contact">get in touch with us &rarr;</a></div>`
  };

  B['how-to-build-healthy-sleep-habits-and-improve-your-sleep-naturally'] = {
    image: '/assets/uploads/AdobeStock_241983905-1024x683.jpeg',
    body: `
<p>If you&rsquo;re struggling with restlessness or poor sleep, building healthy sleep habits can completely transform your nights and your energy levels. These habits are essential not only for better rest but also for overall mental and physical wellness.</p>
<p>All too often, the importance of sleep is overlooked. Our sleeping habits, good and bad, can affect every aspect of our health and vice versa. If you are not getting a good night&rsquo;s sleep, you will definitely notice it affecting your physical and mental wellbeing. You can improve your sleep by adopting a few habits that are proven to help. We discuss some tips you can start with.</p>
<h2>Keep Naps to a Minimum</h2>
<p>Napping during the day can make it harder to fall asleep at night, especially if you are napping later on in the day. There are times when napping can help you to function throughout the rest of the day, but if you do not need to nap, don&rsquo;t allow yourself. Napping should be done before the afternoon and should be no more than thirty minutes to an hour-long.</p>
<h2>Use Your Bed Only for Sleep</h2>
<p>While this may seem obvious, you would be surprised at how much you use your bed. Especially since the start of the pandemic, people are using their beds more and more for reasons other than sleeping and resting, such as working, reading, or other activities. The more you use your bed throughout the day, the less your brain associates it as a place to sleep. Like this, you become restless at night and your body will not recognize your bed as a place to rest and wind down.</p>
<h2>Set an Optimal Temperature at Night</h2>
<p>The optimal temperature for sleeping is in the high sixties. When sleeping, the room has to be cool, dark, and quiet in order for you to fall asleep and stay asleep with ease. The cooler a room is, the cooler your sheets and bedding will feel as well. This may seem obvious, but every detail can have an impact on your quality of sleep.</p>
<h2>Exercise Regularly and Tire Your Body Out</h2>
<p>Exercise is beneficial for several reasons, one of them being that it can improve your sleep. Even as little as thirty minutes of aerobic exercise a day can dramatically improve your sleep quality. It is best to exercise outside because exposure to natural light can help regulate sleep cycles as well. Exercise early on in the day that way your body will feel tired and ready for bed at night.</p>
<h2>Limit Caffeine Consumption</h2>
<p>While most working people consume coffee during work hours, the effects of caffeine can last several hours after drinking it. With that being said, you can easily throw off your afternoon, including the time you take to wind down in bed, with that cup of coffee you drink in the afternoon at work. Everyone has a different tolerance, but the less coffee, the better.</p>
<h2>Use Natural Light to Your Advantage</h2>
<p>In order to maintain your circadian rhythm, you need to shift your lifestyle and schedule to get enough sunlight or natural light. Your circadian rhythm is the cycle of physical, mental, and behavioral changes that a body goes through in twenty-four hours.</p>
<p>Our circadian rhythm is mostly affected by light and darkness. Natural light is important for mental and emotional health, therefore if you are not receiving enough natural light during the day, you may find your sleep easily disturbed. Try to set aside thirty minutes in your day to get sunlight.</p>
<h2>Turn Off Blue Light Before Bed</h2>
<p>Phones, tablets, laptops, and other devices that emit blue light tend to keep our brains alert, making it harder for us to wind down and fall asleep. Blue light is found to reduce levels of melatonin in our bodies, which is a chemical that controls our sleep and wake cycle. When melatonin levels fall, you will find it more difficult to fall asleep. Even keeping your phone near you when you sleep can affect your sleep, so make sure to keep the usage of these devices to a minimum before bed.</p>
<h2>Be Mindful of What You Eat or Drink</h2>
<p>You do not want to go to bed too hungry or too full. In fact, you want to have a meal at dinnertime that is just enough to keep you full, not feeling the need to eat right before bed. The discomfort that comes from being too hungry or too full can keep you up at night. It is especially important to avoid nicotine, caffeine, and alcohol, considering their effects can take hours to wear off.</p>
<h2>Incorporate Stress Management and Meditation Into Your Daily Routine</h2>
<p>Everyone deals with worries and stress, but we all have to learn to manage this area of our health that way it doesn&rsquo;t start to affect our sleep. To manage stress, you can take a couple of minutes out of every day to practice mindful meditation. Mindful meditation helps to ease anxiety and control feelings and thoughts of stress.</p>
<h2>Learn More About the Science Behind Sleep with a Doctor</h2>
<p>Dealing with sleepless nights or other health concerns? <a href="#/contact">Call us to make an appointment</a> with the professionals at Healthonomic today, and we can take a look at where your health stands.</p>
<div style="${CTA}"><strong>Ready for better rest?</strong> Our team in Orland Park, Evergreen Park, and Palos Heights can help you get to the root of sleep concerns. <a href="#/contact">Make an appointment &rarr;</a></div>`
  };

  B['how-to-stay-on-top-of-your-health-at-any-age'] = {
    image: '/assets/uploads/AdobeStock_229735927-1024x479.jpeg',
    body: `
<p>As we grow older, it is crucial to ask ourselves how we can maintain and lead a healthy lifestyle. By focusing on healthier habits, we don&rsquo;t have to worry as much about health problems, such as chronic diseases or mental disorders.</p>
<p>There are several healthy habits you can take on to improve your overall health. Let&rsquo;s take a look at the best and most effective health tips to help you keep your physical health and wellbeing intact, no matter your age!</p>
<h2>Exercise a Couple of Hours Throughout the Week</h2>
<p>Getting 3 to 5 hours of moderate exercise every week dramatically decreases the chances of developing disease. Not only does exercise help rule out disease, but it also improves mobility, agility, and flexibility. Aerobic exercises such as walking, dancing, swimming, and cycling are best for individuals who are aging. Older individuals can also focus on strengthening exercises.</p>
<h2>Be Mindful of Your Diet</h2>
<p>One of the best ways to age gracefully is to maintain a healthy diet. The older your body becomes, the harder it can be to digest and break down what you eat. Your body is no longer operating and burning calories how it would when you were in your 20s.</p>
<p>If you&rsquo;d like to improve your diet, you can consider eating the following:</p>
<ul>
<li>Fruits and vegetables, fresh or canned</li>
<li>Lean proteins such as beans</li>
<li>Whole grains</li>
<li>Fat-free dairy</li>
<li>Healthy fats</li>
</ul>
<h2>Continue to Care for Your Skin</h2>
<p>There are many ways you can care for your skin even when you have reached middle age. After all, your skin is your body&rsquo;s largest organ. With that being said, you should always treat it with care. Make sure to protect your skin by wearing sunscreen and protective clothing if your skin is sensitive. It is highly recommended to get skin cancer screenings to be able to detect any abnormalities ahead of time. Lastly, you can nourish your skin by drinking plenty of water!</p>
<h2>Keep Stress to a Minimum</h2>
<p>Stress can be quite detrimental as it can affect your mental, emotional, and physical well-being. Stress can actually increase the risk of heart disease. The effects of stress are vast, which is exactly why it should be managed and treated. Some of the best ways to keep stress under your control are by exercising, getting good sleep, and speaking about your worries and stresses to your friends and loved ones. All of these methods of dealing with stress act as an outlet to release tension and negative sensations in the body.</p>
<h2>Stay in Touch with Loved Ones and Friends</h2>
<p>Keeping socially active is especially important to one&rsquo;s mental and emotional health as the years go by. Studies show that people who are more socially active tend to be happier individuals, overall, experiencing fewer concerns with mental health. Social interaction stimulates the brain. The more that the brain is stimulated, the happier and healthier you&rsquo;ll be!</p>
<h2>Quit Smoking and Drinking</h2>
<p>Tobacco and alcohol are among the leading causes of death in the United States. By quitting smoking and drinking, you can significantly decrease the chances of developing chronic and life-threatening diseases. Quitting both smoking and drinking can be rather difficult as they can easily become an addiction. If you are struggling with smoking or alcohol addiction, you should speak to a doctor right away.</p>
<h2>Include Cardio into Your Routine</h2>
<p>Not only is cardio-based exercise highly recommended for weight management, but it also helps support your cardiac health! Once you start incorporating cardio into your weekly routine, you can expect to feel more energized, motivated, and better all around. Jump rope, jumping jacks, and HIIT (high-intensity interval training) are all great examples of cardio workouts to consider. Cardio can also help increase muscle mass and bone density, which is crucial to consider as one ages.</p>
<h2>Try a New Hobby</h2>
<p>The more you challenge your brain the more active it stays. An active brain is a healthy brain! Practicing and finding new hobbies is beneficial to one&rsquo;s mental health. New activities promote happiness, purpose, and fulfillment. The more you practice a new hobby or activity, the less prone you are to developing depression or other mental health issues.</p>
<h2>Practice Mindful Meditation</h2>
<p>There is a common misconception that mindful meditation is only beneficial for mental wellbeing. While mindful meditation does encourage mental wellbeing, it is also a great practice for emotional and physical health. Mindful meditation is encompassed around becoming more present at the moment. This is shown to help people feel less tension and pain in their body as they learn relaxation. The practice also improves focus, emotional reaction, relationships, and increased immune functioning.</p>
<h2>Keep Track of Your Health and Make an Appointment Today!</h2>
<p>Looking to lead a healthier lifestyle? We have the knowledge and resources you&rsquo;re looking for. Make an appointment with Healthonomic by <a href="#/contact">contacting us</a> today. We can&rsquo;t wait to discuss and address your health concerns!</p>
<div style="${CTA}"><strong>Healthy aging starts with a conversation.</strong> Schedule a wellness visit at any of our three Cook County locations. <a href="#/contact">Make an appointment &rarr;</a></div>`
  };

  B['be-proactive-about-your-health'] = {
    image: '/assets/uploads/AdobeStock_249748393-1024x683.jpeg',
    body: `
<p>Your health was front and center as the pandemic swept through the country. This experience has taught people profound lessons about always keeping their health at the forefront, not just during uncertain times.</p>
<p>Waiting until something goes wrong is not the most proactive approach to health. As primary care physicians, Healthonomic encourages people to be proactive about their health and take measures to stay one step ahead.</p>
<p>So how is this done? Let&rsquo;s look at a few steps everyone can take to take the reins of their health.</p>
<h2>Follow the Cardinal Rules of Good Health</h2>
<p>The effects of chronic disease are real. Millions of Americans every year experience these effects. The fundamental question remains: What can we be doing to stay one step ahead of our health and catch possible problems early?</p>
<p>The two cardinal rules of health are nutrition and exercise. So the fundamental steps to take to be proactive is to keep yourself in check and engage in these two guidelines of good health. By keeping yourself active and eating right, you already reduce the chances of developing type 2 diabetes, high blood pressure, heart disease, stroke, and certain kinds of cancers.</p>
<p>Most people find that by adhering to a few golden rules, they begin to feel better. When they feel better, they are more productive, more active, and happier. This has externalities and positive effects that reach far beyond immediate health. It helps people achieve goals, pursue better opportunities, and even have better relationships with their families.</p>
<h3>Nutrition</h3>
<p>Let&rsquo;s begin with nutrition. Your body needs fuel to function. When your body does not have the proper fuel it might seek refuge in sugar or processed foods. People who have diets high in sugars and processed foods find themselves crashing or experiencing bad moods or headaches. Over time this can have significant impacts on your health, organ function, and other aspects of your health.</p>
<p>Quick tips for better nutrition:</p>
<ul>
<li>Stay away from fast food</li>
<li>Keep away from processed foods</li>
<li>Add more fruit and vegetables to every meal</li>
<li>Stay hydrated but stay away from sugar drinks</li>
</ul>
<h3>Exercise</h3>
<p>The data doesn&rsquo;t lie. Remaining physically active is essential for maintaining healthy heart function, better energy levels, improved circulation, reduced inflammation, and even better <a href="https://www.sciencedaily.com/releases/2018/08/180808193656.htm" target="_blank" rel="noopener">mental health</a>. According to a study published in the medical journal The Lancet, a study of 1.2 million people found that those who exercise reported having fewer days of poor mental health.</p>
<h2>Annual Wellness Exams with Your Primary Care Physicians</h2>
<p>In addition to following the above steps, you can engage your primary care physician on your journey to better health. One way to start is by using the many tools available today to keep an eye on health. The annual wellness exam looks at several markers of health to ensure that things are working well.</p>
<p>Wellness exams are comprehensive and performed annually by your primary care physician. It is similar to a yearly physical but incorporates much more information and good health metrics. This may also vary by age or specific concerns a person may have about their health.</p>
<p>Your comprehensive wellness exam consists of:</p>
<ul>
<li>A deep review of health history</li>
<li>Addressing questions, concerns, or doubts you may have</li>
<li>Reviewing your height and weight</li>
<li>A heart exam</li>
<li>A <a href="#/blog/healthy-lung-month-tips-for-easy-lifetime-breathing">lung exam</a></li>
<li>Eyesight check</li>
<li>Overview of lymph nodes</li>
<li>Following up on any recent conditions, surgeries, or illnesses</li>
<li>Suspicious moles or skin lesions</li>
</ul>
<h2>The Complete Blood Count Panel</h2>
<p>Your blood says a lot about you. The blood is like a secret code that reveals how your body is working, and there is really no better way to take a peek inside the inner workings of your body. Your primary care physician might also recommend a complete blood panel.</p>
<p>What does it entail? The complete metabolic panel (CMP) is like an internal snapshot of your organ function. This refers to a long list of labs that measure how things are working inside of you. Getting regular blood work done is a great way to be proactive about your health. The panel will measure:</p>
<ul>
<li>Electrolytes such as sodium, potassium, chloride, calcium, and more</li>
<li>Enzymes produced by the liver (AST and ALT), which tell about your liver health and protein levels</li>
<li>Indicators related to kidney health and function</li>
<li>Measurements of blood sugar, which can test for diabetes</li>
</ul>
<p>When results from a blood test are outside of the normal range, a physician may order follow-up tests. With this simple snapshot, your doctor can screen for many different conditions and make note of any irregularities that&mdash;with prompt treatment&mdash;can prevent complications or illness in the future.</p>
<h2>Ready to Get Proactive About Your Health? We Can Help!</h2>
<p>Healthonomic helps people get a hold of their health and stay proactive with preventative care, treatment, and health education. We want to help you grow by better understanding your own health. Start listening to your body and get a <a href="#/service/check-ups">wellness check</a> today.</p>
<div style="${CTA}">If you want to take control of your health but don&rsquo;t know where to start, pay us a visit. <a href="#/contact">Call Healthonomic Primary Care today &rarr;</a></div>`
  };

  B['guide-for-healthy-eating-habit-development'] = {
    image: '/assets/uploads/AdobeStock_79730894-1536x1019.jpeg',
    body: `
<p>Delicious food is one of the many pleasures in life. Although, many of those &ldquo;delicious&rdquo; foods we indulge in have become processed foods or fast foods which are amongst the unhealthiest for us to consume. As such, healthy living and having a balanced diet has become a challenge for many. While eating processed and fast food brings temporary pleasure, it can potentially lead to problems in the future. The real reward comes from adopting healthy eating habits. But where does healthier eating start? You have our help. We&rsquo;ve created a guide to help you start your journey to healthier eating! Check it out below!</p>
<h2>Listen to Your Body</h2>
<p>It&rsquo;s important that you become mindful of your body and how full you feel when eating. Once you start feeling full is when you should stop eating. You should never eat more than your natural capacity because the more you force food down, the more room your stomach will try to make, which will ultimately cause it to expand. The more your stomach expands, the easier it will be to become hungry and eat more than you should.</p>
<h2>Try New Foods</h2>
<p>One very effective way of cutting down on fattening foods is by exploring other foods you may have never had before. By eating the same foods, we limit our nutritional range. But when you try new foods, adopting healthier habits becomes much easier. You could look into more fruits, vegetables, and other healthy meals you have yet to try!</p>
<h2>Take Your Time Eating</h2>
<p>Experts suggest chewing slowly and intentionally for every bite of food you take. Many people have a bad habit of consuming their food quickly. Teaching yourself to eat slowly helps to bring your focus back to the task at hand (eating) and you are less inclined to scarf your food down more than what your body really needs. This is one of the best ways to become mindful of how much you are eating and how much your body actually requires.</p>
<h2>Give Yourself Proper Portions</h2>
<p>Studies show that people eat more food&mdash;even if the food doesn&rsquo;t completely satisfy their appetites&mdash;if they are being served more than they should. Serving yourself on smaller plates or dishes is encouraged because, by doing so, you will feel less inclined to eat more than what is being served. It is extremely crucial to teach yourself that you do not have to eat more than what your body is capable of holding because this is where weight gain can begin.</p>
<h2>Keep Healthy Snacks Available</h2>
<p>It is completely normal to get hungry between meals. While this is normal for everyone, you must be responsible for taking the right approach when tending to your hunger and your cravings. Ultimately, you decide what foods you have available. The best thing to do is to keep your kitchen stocked with a variety of healthy foods and snacks to limit junk food. It is also recommended to bring healthy snacks with you when you are on the go to limit yourself from buying unhealthy foods as well.</p>
<h2>Read Ingredient Labels</h2>
<p>Whether you are trying to cut down on sugars or sodium, the only way you will really know what&rsquo;s in your food and how much of it is in your food is by reading ingredient labels. Packaged foods tend to have the most unhealthy ingredients, so before you decide to buy packaged produce, think twice and read into what you&rsquo;re buying and what you could be putting into your body.</p>
<h2>Cook More at Home</h2>
<p>Eating at home is one of the most effective ways to not only cut down on weight but to refrain from eating unhealthy foods. Not only that but making the food yourself allows you to cut down on portions while choosing healthier ingredients. When you serve yourself, you tend to eat and consume less fattening products. You can also play around with spices to look forward to eating at home and to become less inclined to get food from a restaurant.</p>
<h2>Develop a Routine</h2>
<p>Food preparation can take you a long way in cutting down on junk foods and limiting how much you eat. The more you keep up with your routine, the easier it will become to eat healthier and to continue healthy habits. You should be eating meals around the same time every day that way you feel fulfilled and the routine will come more naturally to you!</p>
<h2>Get Your Health Back on Track with Healthonomic!</h2>
<p>Here, at Healthonomic, we understand how important healthy habits are. Our team of medical experts wants to help you lead a healthier life. <a href="#/contact">Contact us</a> today to make an appointment and to learn more about how our services can help you!</p>
<div style="${CTA}"><strong>Easily Book Your E-Visit, Today!</strong> We understand in-person visits may not fit within everyone&rsquo;s schedule. As such, we&rsquo;ve made it easier than ever to schedule phone or e-visits at Healthonomic Primary Care. To delve deeper into any of the topics discussed in this blog, reach out to <strong>Hannah Mehochko, NP</strong> (Family Medicine). <a href="https://healow.com/apps/provider/hannah-mehochko-2198026" target="_blank" rel="noopener">Book your virtual appointment &rarr;</a></div>`
  };

  B['8-simple-ways-to-keep-cool-while-exercising-in-the-heat'] = {
    image: '/assets/uploads/AdobeStock_252194497-1536x1024.jpeg',
    body: `
<p>Although the end of the summer is near, the heat is here to stay for a little while longer. This year has taken an interesting turn in terms of climate, meaning we&rsquo;ve hit record-breaking temperatures. People, now more than ever, are advised to stay safe in the heat while going out or while partaking in physical activity.</p>
<p>If you exercise outdoors, there are many things to keep in mind. Of course, you can get up early and have as much water as possible, but that&rsquo;s not all you should do. In this blog, we&rsquo;ll discuss how you can keep your body safe while getting your daily dose of physical activity in the heat.</p>
<h2>1) Eat a Light Meal</h2>
<p>People are always encouraged to eat just enough prior to a workout. This way, their bodies are properly fueled. While this holds true, eating too much right before a workout could intensify your body temperature. Right after eating, the body produces more heat. If you tend to eat bigger meals, it is recommended that you give your body at least two to three hours before exercising in the heat. This way, your body can cool itself down as fast as possible.</p>
<h2>2) Exercise During the Coolest Part of the Day</h2>
<p>The midday sun is brutal and you can hurt yourself by forcing yourself to complete a workout during this time of the day. The best times to work out outside during the summer are early in the morning or in the evening when the sun is setting or has gone down. Depending on your location, temperatures could drop twenty degrees when the sun has completely gone down, so you wouldn&rsquo;t have to worry about the heat.</p>
<h2>3) Apply Sunscreen Beforehand</h2>
<p>Protecting your body from the heat means also protecting your skin. Your skin will start to burn if it&rsquo;s been exposed for more than two hours, possibly less than that, so you&rsquo;ll want to prepare for your workout by adding sunblock. You could also try working out in areas that are more shaded that way you don&rsquo;t have to worry too much about exposure. Either way, it is best to get some of the more exposed areas of your skin covered with sunblock.</p>
<h2>4) Wear Light-Colored and Lightweight Clothing</h2>
<p>Your body will do its part to keep cool, but you can also control how much heat is being produced. One of the ways you can do so is by opting for lightweight and light-colored clothing. If you don&rsquo;t have this kind of clothing, it is recommended that you look into buying more outdoor-friendly clothing, including dry-fit materials. This can help you get through even the toughest workouts by allowing your body to breathe.</p>
<h2>5) Drink Plenty of Water Before, During, and After Your Workout</h2>
<p>As obvious as this may seem, it needs to be said. Many people take the time to drink water before and after their workouts, but neglect to take the time to drink water during breaks. We understand you might just want to get through a workout and have it finished ASAP, but it is important to keep your body hydrated. This calls for taking a break here and there to keep your body hydrated.</p>
<h2>6) Avoid Sports Drinks</h2>
<p>Sports drinks are only to be consumed in certain circumstances. These drinks are best when your body is active for long durations at high intensities. Any kind of exercise that goes beyond an hour to two hours does qualify for a sports drink, but it is best that you stick to water. Drinking sports drinks regularly can add to the caloric weight, which makes all the hard work go nowhere.</p>
<h2>7) Try More Heat-Friendly Exercises</h2>
<p>Running and hiking are some of the toughest (and sometimes most dangerous) exercises you could do in the summer heat. Swimming is one of the best exercises you could do in this time of year because it keeps your body cool and burns calories like crazy! Yoga is also a good exercise to do if you want to get that breath of fresh air.</p>
<h2>8) Never Push Yourself if You&rsquo;re Feeling Fatigued</h2>
<p>The most important thing to stay aware of is how your body is feeling. You should never push yourself if you are unable to complete your workout. Everyone&rsquo;s body has a limit, especially in the heat. Pushing yourself to work under extreme heat conditions can lead to serious complications. If you&rsquo;re starting to feel too tired or fatigued, the best thing to do is stop your workout and allow your body to rest.</p>
<h2>Stay On Top of Your Fitness with Healthonomic</h2>
<p>It&rsquo;s important to always listen to your body, in sickness or in health. If you have any concerns about your health, you can <a href="#/contact">contact</a> the professionals at Healthonomic and make an appointment. We have all the services our patients could need!</p>
<div style="${CTA}"><strong>Have questions about exercising safely?</strong> Our team is here to help you stay active year-round. <a href="#/contact">Make an appointment &rarr;</a></div>`
  };

  B['how-to-stay-on-top-of-your-health-while-working-a-desk-job'] = {
    image: '/assets/uploads/image1-1536x1024.jpeg',
    body: `
<p>Sitting behind a desk all day is second nature for several million working Americans. While you might become accustomed to the routine of working at a computer, it can take a toll on your health. Oftentimes, office workers have to adopt new habits to keep up with the office workflow. Adopting necessary changes is critical to one&rsquo;s health. In these work settings, you should take the time to think about how your daily duties can affect your health and what you can do to keep up with your wellbeing. We understand the physical and mental exhaustion that can come from these settings, so we created a quick list of some of the best tips to keep your mind and body in shape.</p>
<h2>Practice Good Posture</h2>
<p>Maintaining a healthy posture goes a long way, especially when you have to sit down for eight hours a day. Poor posture can lead to problems with your neck, back, shoulders, and other parts of your body, making it hard to work and focus while working. Every time you catch yourself hunching over, fix your posture right away so that you can get used to sitting upright.</p>
<h2>Stretch Every Now and Then</h2>
<p>Your legs can become restless when you aren&rsquo;t putting them to work. Even a little bit of stretching can help your legs. Stretches don&rsquo;t have to be extreme. You can pull your legs away from you, even if you&rsquo;re sitting down, to help maintain strength and flexibility.</p>
<h2>Go for a Walk During Break</h2>
<p>Any chance you get should be an opportunity for you to get your legs working. Your lunch break would be the perfect time to do exactly that! After eating, if you have time, you could go for a short walk outside, which also gives you time away from the workplace. Everyone needs a small break every now and then, so don&rsquo;t be afraid to make the most of your time.</p>
<h2>Do a Couple of Leg Exercises</h2>
<p>You could either do this in the morning or when you get home from work, whenever you have the time to do so. Everyone has got a busy schedule, but if you can fit some time in to get your legs up and going, you won&rsquo;t have to worry about encountering health problems later in life. You could do a couple of lunges, squats, or even both to give your legs just as much activity as the rest of your body!</p>
<h2>Adjust Your Monitor Light Settings</h2>
<p>If you haven&rsquo;t experienced the effects of staring at a computer screen all day, you will soon enough. The light from a computer screen can have several effects such as headaches, feeling tired faster, and eye pain. Try to navigate through your monitor&rsquo;s settings to change the light settings and to keep the brightness low.</p>
<h2>Fewer Shortcuts and More Steps</h2>
<p>Sure, you could take the elevator up to your office space, but will a couple more minutes of traveling up the stairs hurt you? Whenever you have the chance to take a few extra steps, you should always do so. This can help you get your daily steps in and the minimum physical activity your body needs, routinely.</p>
<h2>Give Your Eyes a Break from the Screen</h2>
<p>You have to stay focused and on task throughout the day, we get it, but you also have to give your eyes a bit of a break every now and then before they get too irritated. You could give your eyes a break by focusing on an object away from the computer screen for a couple of minutes, just to give your eyes that quick refresher.</p>
<h2>Adjust Your Desk</h2>
<p>If you have an adjustable desk, take advantage of it. Standing for an hour to an hour and a half is best if you have a stand-up desk. The bottom half of your body gets tired after sitting for too long, so when you feel that&rsquo;s the case, you can stand for a good while to put your muscles to work.</p>
<h2>Learn More About How to Treat Your Body with Healthonomic</h2>
<p>The list can go on and on. With experts at Healthonomic, we can help you go further with your goals by taking an inside look at your health and provide the highest level of care. If you&rsquo;re ready to receive medical attention from a professional, <a href="#/contact">contact us</a> today.</p>
<div style="${CTA}"><strong>Desk job taking a toll?</strong> Talk to our team about staying healthy through the workday. <a href="#/contact">Make an appointment &rarr;</a></div>`
  };

  B['the-7-best-exercises-to-tackle-and-ease-stress'] = {
    image: '/assets/uploads/AdobeStock_282610448-1536x1024.jpeg',
    body: `
<p>Everyone deals with stress, some more than others. While it is normal and a part of life, it&rsquo;s important to take the time to address your stress and find ways to relieve your worries.</p>
<p>For many, exercise is one of the best ways to relieve stress. When you are exercising, your body runs on <a href="https://www.health.harvard.edu/staying-healthy/exercising-to-relax" target="_blank" rel="noopener">adrenaline and cortisol</a>, which are the same hormones that are released when you are stressed out or under pressure. Adrenaline and cortisol are appropriate for when you are exercising, which is why your body runs on them, but this also explains the nervousness and inability to relax when you are stressed out.</p>
<p>It&rsquo;s not easy to take the time to get up and get active, but it can be incredibly rewarding for your mental and physical health. We discuss the best exercises for reducing stress levels and what each exercise can do for you.</p>
<h2>Swimming</h2>
<p>Swimming is one of the most demanding exercises there are. Not only does it provide several physical and mental health benefits, but it&rsquo;s also great for cardio. Swimming is one of the best exercises because it&rsquo;s a full-body workout. Your legs, arms, and back are typically tired right after swimming, but with that, you&rsquo;ve run all of your stress out as well. You don&rsquo;t have to be swimming laps back to back to relieve stress. Even just simply being in the water can have immediate soothing effects on a person&rsquo;s body.</p>
<h2>Cycling</h2>
<p>Cycling&mdash;whether it&rsquo;s done on your own bicycle or in a local spinning studio&mdash;is a great form of cardio that reduces stress altogether. It gets the heart pumping, and when that happens, blood and oxygen are being transferred throughout the body to support your muscles. As much energy as cycling requires, it is rather easy on the joints, so you might be sore, but you won&rsquo;t feel any pain or ache besides that.</p>
<h2>High-Intensity Interval Workouts (HIIT)</h2>
<p>Several exercises can be done in one HIIT session. Since various HIIT workouts focus on legs, arms, the abdomen, you have the freedom of choice! You can also do full-body HIIT workouts, which might be the best if you are trying to relieve high levels of stress. Like the name says, these workouts are intense and get the heart pumping rather quickly. These workouts mix aerobic, anaerobic, and strength elements, which are beneficial for your mental health and addressing mental issues.</p>
<h2>Dancing</h2>
<p>Dancing, one of many fun things to do, is another great exercise for reducing levels of stress. Dancing is not only a perfect workout but it also provides people with a great opportunity to socialize and connect with others, especially if you go to a local dancing studio. Socializing is all about fostering new relationships. In addition to physical activity, you can improve your mental well-being by meeting new people!</p>
<h2>Yoga</h2>
<p>This is one of the best ways to reduce stress. In fact, yoga focuses specifically on being in touch with your body and what you are feeling while doing each exercise. This allows you to focus on something else as opposed to what might be fueling your stress.</p>
<p>Most yoga poses combine techniques of controlled breathing and mindfulness, which are critical to reducing stress and achieving relaxation. Yoga is not as physically demanding as cycling or swimming but is still just as effective.</p>
<h2>Pilates</h2>
<p>Pilates is known for strengthening muscles, improving posture and flexibility, and of course, heightening mental awareness and wellbeing. Pilates is known for helping reduce levels of anxiety and stress. This is because the exercise releases tension as you are using breathing techniques that are supposed to draw more oxygen to the brain. As more oxygen travels to the brain, the more relaxed and calm you feel.</p>
<h2>Boxing and Kickboxing</h2>
<p>Boxing and kickboxing are great for tackling your stress head-on because they&rsquo;re a great source of cardio. Like many other forms of exercise that we have mentioned, boxing and kickboxing get your heart pumping fast and work to get oxygen traveling all throughout your body. Boxing requires practicing the best breathing techniques, providing instant energy. Once you&rsquo;re done with a session, you can expect to feel less stress than what you came in with!</p>
<h2>Relieve Your Worries with Help from Healthonomic</h2>
<p>At Healthonomic, your wellbeing and health are our number one priority. Whatever concerns you may have about your health, you can come to us to find a solution. We are ready to work with you whenever you are&mdash;<a href="#/contact">contact us</a> today!</p>
<div style="${CTA}"><strong>Stress weighing on you?</strong> Our team takes a whole-person approach to your health. <a href="#/contact">Make an appointment &rarr;</a></div>`
  };

  B['plant-based-diets-recipes'] = {
    image: '/assets/uploads/image1-1536x864.jpg',
    body: `
<p>Plant-based foods may seem like a trend, but it&rsquo;s not going anywhere. In fact, it&rsquo;s growing more and more each year. A big concern for most people tends to be, how am I supposed to get enough protein? Many people feel that they <em>must</em> eat meat because, well, it&rsquo;s what human beings do! Here&rsquo;s a little secret: you can have a plant-based diet without going completely vegan. Knowing the differences between various plant-based diet options might change your mind about it all. Take a second look before you pass on that meatless option!</p>
<h2>What Is Plant-Based?</h2>
<p>First, let&rsquo;s cut the word <em>diet</em>. Once we start labeling things as a diet, we quickly fall off the wagon or feel as if we&rsquo;re being forced to do something we dislike. Out of any diet out there, people feel as if going plant-based is ridiculous, impossible, expensive, and all those other misconceptions that we&rsquo;ve heard before.</p>
<p>To reiterate, you do not have to go vegan to have a plant-based diet. When committing fully to a vegan diet, you&rsquo;re probably doing it for more ethical reasons than thinking of all the health benefits.</p>
<p>Eating plant-based and still consuming a very low amount of meat per month is okay, too. The point of going plant-based is to load up on all of the good stuff &ndash; plants! Getting rid of animal fats and the wrong kinds of proteins and carbs can do wonders.</p>
<p>A plant-based diet, in simplest terms, means that the majority of your meal is plant-based. Taking the stress of maintaining a diet and all the rules that come with it will make your life a lot easier.</p>
<h2>Protein Problems</h2>
<p>A big holdback for many looking to switch to a plant-based diet comes down to protein intake. Well, there&rsquo;s a lot of protein you can get from going plant-based, and it comes out to a more beneficial way to get protein. Proteins are made from amino acids, and there are sources of protein that contain all the essential amino acids we need.</p>
<p>When looking at plant-based, some of the best protein sources include the following:</p>
<ul>
<li>Tofu</li>
<li>Tempeh</li>
<li>Beans and Lentils</li>
<li>Nuts &amp; Butters (almonds, walnuts, cashews)</li>
<li>Seeds (chia, hemp, flax, sunflower, sesame)</li>
<li>Quinoa</li>
<li>Greens (broccoli, kale)</li>
</ul>
<h2>So, What Are Some Plant-Based Recipes?</h2>
<p>That plant-based lifestyle is starting to sound a bit more interesting, right? Below, we&rsquo;ve compiled a few great plant-based recipes for you to try out. When it comes to plant-based recipes, you&rsquo;ll quickly find out that there&rsquo;s something for everyone.</p>
<h2>Start The Morning Right &ndash; Tofu Scramble</h2>
<img src="/assets/uploads/AdobeStock_151595164-1024x683.jpeg" alt="Tofu scramble in a pan" style="width:100%;border-radius:8px;margin:0 0 22px;" loading="lazy">
<p>Eggs are a huge part of everyday life and a prime ingredient for breakfast. However, about 60% of the calories in eggs are made of saturated fat. Aside from that, they&rsquo;re loaded with cholesterol. Using tofu as an egg substitute in the morning will provide more protein and a simple, healthier start to your day.</p>
<div style="${INFO}"><p style="margin:0 0 10px;"><strong>Ingredients</strong></p>
<ul style="margin:0;">
<li>1 block Soft Tofu (14oz)</li>
<li>1 tbsp Grapeseed Oil (Optional)</li>
<li>1 tbsp vegan chicken or vegetable broth</li>
<li>1 tsp Nutritional Yeast</li>
<li>3/4 tsp Sea Salt (to taste)</li>
<li>1/2 tsp onion powder</li>
<li>1/4 tsp garlic powder</li>
<li>1/4 tsp Turmeric</li>
<li>Freshly Ground Pepper</li>
</ul></div>
<p><strong>Cooking Instructions:</strong></p>
<ol>
<li>Heat a pan on Medium-Low heat.</li>
<li>Add oil if using, then crumble the tofu over the pan (you can use your hands or a fork).</li>
<li>Add broth along with remaining ingredients.</li>
<li>Combine the tofu and spices to make it evenly coated.</li>
<li>Cook until a good amount of the liquid is absorbed (should take about ten to 15 minutes).</li>
<li>Serve warm as desired. Will keep in the fridge for at least 5 days in an airtight container.</li>
</ol>
<h2>Wings Like You&rsquo;ve Never Had Before &ndash; Korean-Style Cauliflower Wings</h2>
<p>As you cut more meat out of your diet, there may be some things you&rsquo;ll miss no matter what. The great thing about plant-based is that you can have the food you love but in a new form! These Korean-style cauliflower wings are delicious in every possible way.</p>
<div style="${INFO}"><p style="margin:0 0 10px;"><strong>Ingredients &mdash; For Sauce</strong></p>
<ul style="margin:0 0 16px;">
<li>2 tsp of sesame oil</li>
<li>2 cloves of garlic</li>
<li>5 tbsp of soy sauce</li>
<li>2 tbsp of agave syrup</li>
<li>2 cm of grated ginger</li>
<li>1 tbsp sriracha sauce</li>
<li>1 tsp of apple cider vinegar or white wine vinegar/rice vinegar</li>
<li>2 tsp of cornflour</li>
<li>1&ndash;2 tbsp of water</li>
</ul>
<p style="margin:0 0 10px;"><strong>For Cauliflower</strong></p>
<ul style="margin:0;">
<li>1 full head of cauliflower, chopped into florets</li>
<li>1/2 cup (a little less is okay) of plain flour</li>
<li>3 tbsp cornflour</li>
<li>2 tsp sesame oil</li>
<li>1/4 tsp salt</li>
<li>a sprinkle of black pepper</li>
<li>1/2 tsp garlic paste</li>
<li>1/2 cup of water</li>
</ul></div>
<p><strong>Cooking Instructions &mdash; For the roasted cauliflower:</strong></p>
<ol>
<li>Preheat the oven to 350&deg;F, then line a baking dish with baking paper.</li>
<li>Mix the plain flour, cornflour, black pepper, and salt in a bowl.</li>
<li>Combine water, sesame oil, and garlic paste in a separate bowl, then add it to the dry ingredients.</li>
<li>Continue stirring till mixed well, and then quickly add in the cauliflower florets (it will thicken over time otherwise). Tumble with your hands until the cauliflower is well coated.</li>
<li>Transfer cauliflower onto the baking tray, trying not to pour too much batter in, or else this will stick all of the florets together once cooked.</li>
<li>Bake for 25 mins until golden. Meanwhile, you can make the sauce.</li>
</ol>
<p><strong>For the sauce:</strong></p>
<ol>
<li>Add the soy sauce, sriracha sauce, agave syrup, sesame oil, grated ginger, garlic, and vinegar in a small pan. Turn the heat on medium.</li>
<li>Meanwhile, mix the two tsp of cornflour with two-three tbsp water to form a paste. Once the sauce boils, slowly add in the cornflour and stir. If the sauce is too thick, add in a bit more soy sauce.</li>
<li>When the cauliflower is ready, pour over 3/4 of the sticky sauce and tumble with your hands. Return the cauliflower to the oven and bake for a further ten mins to crisp up and caramelize.</li>
<li>Once cooked, brush over the remaining sauce on the cauliflower.</li>
</ol>
<h2>Learn More About Living a Plant-Based Life, Today!</h2>
<p>Whether you decide to make a single plant-based dish just to try it out or you&rsquo;re ready to take a deep dive into this lifestyle, Healthonomic is here to help! <a href="#/contact">Give us a call today</a> to learn more about plant-based and vegan lifestyles.</p>`
  };

  B['1780-2'] = {
    image: '/assets/uploads/AdobeStock_302634350-1536x1023.jpeg',
    body: `
<p>If we had to pick words that we associate with the holidays, health and fitness would have to be some of the absolute last most of us would normally choose. Holiday treats and cold weather aren&rsquo;t exactly a recipe for success in that regard, so it makes sense why we may plump up a little.</p>
<p>This is the recipe every single year; once New Year&rsquo;s Day comes around, we&rsquo;re all vowing to lose 10 or 15 pounds along with various other resolutions. Some of us accomplish it, but most of us don&rsquo;t. If you&rsquo;re sick of your weight yo-yoing year after year, then our tips in our latest blog may help!</p>
<h2>Make Hygiene A Top Priority</h2>
<p>At first glance, it may seem odd for our first tip to be about hygiene. After all, excess weight is most often associated with diet and exercise. However, the pandemic has been a global wake-up call for the importance of hygiene.</p>
<p>Those who contract COVID-19 can experience a wide range of health problems that can linger long after the initial infection. This could derail your health or prove fatal if you aren&rsquo;t careful. This holiday season, ensure you use good hygiene at all times to reduce your risk of illness.</p>
<h2>Manage Your Stress</h2>
<p>Another area of health that is too often ignored is the role of stress in our lives. Stress causes long periods of inflammation in the body and can worsen our decision-making skills. More and more of our lives each day are coated in stress, leading to chronic conditions and shorter lifespans.</p>
<p>Obviously, this may be a stressful time given the pandemic. You may only be able to avoid so much stress, but every little bit could count to keeping the pounds off.</p>
<p>Here are a few tips for keeping your stress levels to a minimum:</p>
<ul>
<li>Plan ahead</li>
<li>Reach out to friends and family (safely!)</li>
<li>Keep gatherings small (or digital)</li>
</ul>
<h2>Set Yourself Clear Boundaries (But Be Kind!)</h2>
<p>The number one power that you will need to cultivate is willpower and strategies to reach your goals. To do this, you will have to set clear boundaries with yourself. Either mentally or through writing, set boundaries for yourself based on what your goal is. Here, it may help to discuss strategy with a doctor or physician.</p>
<p>When practicing your willpower, remember to be kind to yourself if you mess up. Sometimes, we are mentally tough to ourselves but are kind to our loved ones. By being kind and encouraging to yourself, you may find it easier to stick to your goals.</p>
<h2>No Gym? No Problem!</h2>
<p>Right now, due to the pandemic, many gyms across the country have had to close. Regular gym-goers now have to make do at home, leading many to just drop their routine altogether. You <em>don&rsquo;t</em> want that to be you.</p>
<p>Luckily, there are dozens of ways that you can still break a sweat without a gym. Partially due to the pandemic, there are a plethora of apps and online workouts that you can use. In addition, there are many gadgets and tools you can use in your home.</p>
<h2>Don&rsquo;t Be Too Strict!</h2>
<p>To stay healthy, too many people will go to extremes to make progress. Despite research suggesting this strategy does not work, people still try to use extreme asceticism to reach goals.</p>
<p>Instead, be realistic with your goals. That way, you can work up to your goal without burning yourself out. Remember, small progress over time is better than making huge leaps at once.</p>
<h2>Keep A Close Eye On Sugar</h2>
<p>Sugar and Christmas seem like a match made in heaven, but it can be the fastest way to derail your health and even your happiness. Too much sugar can have an adverse effect on your body and your mental health. Excess sugar has been linked to the following health issues:</p>
<ul>
<li>Weight Gain</li>
<li>Acne</li>
<li>Type 2 Diabetes</li>
<li>Depression</li>
<li>Skin Aging</li>
<li>Fatty Liver</li>
<li>Kidney Disease</li>
</ul>
<p>If it helps, try to keep tabs on your sugar intake by using a tracker. <strong>Beware</strong>: there&rsquo;s added sugar in more products than you may think. Take a second to glance at the nutrition labels to ensure you aren&rsquo;t taking in too much sugar.</p>
<h2>Healthonomic is Here to Help</h2>
<p>For a happier, healthier new year, choose Healthonomic as your go-to primary care clinic. <a href="#/contact">Give us a call</a> today to schedule an appointment.</p>`
  };

  B['healthy-lung-month-tips-for-easy-lifetime-breathing'] = {
    image: '/assets/uploads/AdobeStock_290616592-1536x1024.jpeg',
    body: `
<p>If you haven&rsquo;t taken a deep breath lately, take the time to take one now. Just notice the air flowing through your airway, feel it rest in your lungs as it&rsquo;s exchanged for carbon dioxide, and then exhale as it flows back out into the world.</p>
<p>That was one breath, one of the approximate 650 million the average person will take in their lifetime. Most of the time, we don&rsquo;t think about it, but being able to breathe is a treasure that we literally forget about most of the time.</p>
<p>However, that ability is often not afforded fully at birth or is lost to accident, bad behavior, disease, old age, or some combination of factors. Living without full lung capacity is a challenge that too many of us face, but there are some concrete ways to reduce your risk of complications down the line.</p>
<p>Check out our tips for Healthy Lung Month, and spread these tips to friends and family to stay healthy and happy!</p>
<h2>A Quick Primer On Your Lungs</h2>
<p>Unless you&rsquo;re a doctor, it&rsquo;s possible that you don&rsquo;t think all that much about your lungs or about breathing, which is fair. We&rsquo;re all pre-programmed on how to do it, so it&rsquo;s an easy program to run in the background.</p>
<p>But your lungs are actually incredibly fascinating organs. First, you breathe air into your lungs by filtering it through your windpipe, which keeps that air warm and moist. Then, the air is filtered down the bronchi and bronchioles of each lung before being harnessed by the alveoli at the ends of the bronchioles.</p>
<p>The job of these alveoli is to take in oxygen from the air and return some carbon dioxide to expel into the air. Once the oxygen is taken in, your heart and your circulatory system will do the rest, taking that sweet oxygen to the cells who need them.</p>
<h2>Lung Problems &amp; Issues Of Civilization</h2>
<p>Lung problems, at least in our modern times, are largely driven by the environments and lifestyles we find ourselves in. Diseases like lung cancer, asthma, and emphysema seem to have cropped up after our lifestyles changed from hunter-gatherers.</p>
<p>Pollution, lack of exposure to the environment, sedentary lifestyles, bad products; they all contribute to our worsening health across the board, and especially in the United States. These simply did not seem to be major issues for our ancient ancestors, but now seem to be a massive problem for people across the globe.</p>
<p>Thankfully, we have ways to combat some of the bad effects of our environments. By employing a few simple steps here and there, you can increase your chances of yourself or your loved ones maintaining a healthy life long-term.</p>
<h2>Avoid Any And All Tobacco (And Vaping)!</h2>
<p>This one should be an absolute no-brainer, given the decades of PSAs about cigarettes and smoking. Yet, millions around the world still partake in the product.</p>
<p>Scientists believe that tobacco causes changes in the body when inhaled, with the lungs taking the most damage. As those cells change, they may lead to malfunctions between cells and certain processes. Some cell groups may experience growth beyond their natural limits, which occurs when there is a cancer.</p>
<p>Tobacco and tobacco products like cigarettes and cigars are known carcinogens. Quitting these products or simply never partaking in them in the first place are fantastic steps in the direction of optimal lung health.</p>
<p>Don&rsquo;t think that vaping is safe, either. Vaping needs far more definitive research, but early studies suggest that vaping can cause damage to the lungs as well.</p>
<h2>Get Outside, And Go Often</h2>
<p>If you&rsquo;re anything like the average American, you probably spend a great chunk of the day indoors. Whether for school, work, or both, we tend to spend quite a bit of time inside.</p>
<p>While our time outside would almost always be better for us in the long-run, the issue lies in our time spent indoors. That&rsquo;s because much of the air being circulated inside isn&rsquo;t filtered properly. Contaminants and bacteria/viruses could propagate in a space where the filtration is subpar. In the age of COVID-19, that could be incredibly unsafe.</p>
<p>One way to counter stale indoor air is to simply go outside. The air outside is likely much richer and healthier for your body, and the risks of bumping into contaminants are much lower.</p>
<p>There is also some evidence to suggest that spending time in nature as a child could reduce the likelihood of asthma. Children who live on farms or near forests exposed to allergens reduce the chances of developing allergies as well. By spending more quality time in nature, you could make your life better down the road.</p>
<h2>Stay Active</h2>
<p>One of the best things you can do for your lungs is to keep them moving and active. Like the saying goes, &ldquo;Move it or lose it!&rdquo; You&rsquo;ll want to keep yourself moving and use the full extent of your lung capacity when you can.</p>
<p>Like other aspects of your body, your lungs and diaphragm need stimulation to develop properly and stay strong. Underdeveloping those muscles could have a ripple effect on health down the line, even affecting the strength of the immune system and related systems.</p>
<h2>Keep Your Doctor In The Loop</h2>
<p>When it comes to lung health, time is always of the essence. If you take your problems to your doctor right away, instead of &ldquo;powering through,&rdquo; you increase the chance of catching a major problem early. By ignoring pain, you may let an issue grow until it does major damage.</p>
<p>Whenever you feel like something is off with your body, let your doctor know as soon as you can.</p>
<h2>Trust Healthonomic For All-Around Care!</h2>
<p>If you&rsquo;ve gotten this far in the blog, you&rsquo;ll notice our tips were easy and natural. At Healthonomic Primary Care, we try to blend natural behavior change with modern medicine and technology to provide great care.</p>
<div style="${CTA}">If you struggle with COPD or other lung conditions, <a href="#/contact">contact our clinic today</a> so we can develop a treatment plan!</div>`
  };

  B['the-complexities-of-the-immune-system'] = {
    image: '/assets/uploads/Health_357702467-1536x1023.jpeg',
    body: `
<p>Health is a primary concern for every family. This year, we&rsquo;ve all been especially focused on health after the world was affected by a virus that forced society to press the pause button on school, work, travel, and overall day-to-day normal life. It has certainly forced everyone to reflect on their health and how they are taking care of themselves. According to the data, COVID-19 affects the elderly and the immuno-compromised the hardest. So now, more than ever, Americans are wondering how they can strengthen their bodies to better resist infection and be more resilient against infections or threats such as this. The immune system is, of course, too complex to cover here, but we thought we&rsquo;d go through a brief overview of some of its main components.</p>
<h2>The Immune System and Its Functions &mdash; A Quick and Fascinating Overview</h2>
<p>When someone tells you to &ldquo;strengthen your immune system,&rdquo; what exactly do they mean? The immune system is complex, but there are specific types of cells that work throughout your body or live in a certain tissue. Each of these cell types will have a specific role and will know to recognize specific problems. These cells communicate with each other and work together.</p>
<p>The overall function of the immune system is to protect the body from infection. Infectious diseases are caused by viruses, bacteria, fungi, protists, and other pathogens. It is a defense system against foreign invaders that want to cause harm to our body. It can distinguish between normal, healthy cells and unhealthy cells, as it recognizes danger signals often termed danger-associated molecular patterns. As the immune system recognizes these signals, it gets to work. If the response cannot be activated, that means there is a problem.</p>
<h2>The First Line of Defense</h2>
<p>The first line of nonspecific defense is the skin. This, after all, is a physical barrier that keeps pathogens out. Openings in the skin, such as the mouth and eyes, are protected by saliva, mucus, and tears, which contain an enzyme that breaks down bacterial cell walls. This is why we have heard so much talk about washing our hands and not touching our eyes or nose with unwashed hands. Simply by reducing contact with outside pathogens in the openings of your skin, you lower the chances of infection.</p>
<h2>The Second Line of Defense</h2>
<p>The second line of defense refers to the nonspecific defense that happens when something does make it through the skin. This occurs, for example, if you fall down and get an open wound that encounters bacteria. This might be called an inflammatory response &ndash; when a pathogen stimulates an increase in blood flow to the infected area. Blood vessels will expand and the white cells get to work.</p>
<p>Then there is the adaptive immune system, which is a more specific defense when something gets through the initial defenses. If the immune system sees cells it does not recognize, it jumps into action. This might be for something like a cold or the flu. Once your immune system fights this off, the cells will &lsquo;remember&rsquo; these pathogens and recognize them next time, increasing efficiency in fighting them off. It&rsquo;s why you can be kind of immune to a cold if you&rsquo;ve just gotten over one recently. Humoral immunity refers to the actions of antibodies circulating throughout the body, in order to fight infection.</p>
<h2>Can You Boost Your Immune System and Strengthen Your Body&rsquo;s Defense?</h2>
<p>The immune system is just another aspect of the human body that is quite fascinating. For the most part, it is highly effective at protecting you from disease-causing microorganisms. And while there are ways we can keep ourselves healthy and lower our chances for infection exposure, there is no clear-cut answer. That might be because your body has so many different cells that fight off different infections, so it&rsquo;s difficult to know which ones to boost at any given time.</p>
<p>There are a few things, however, that can be quite helpful for strengthening your immune response.</p>
<p><strong>Choose a healthy lifestyle.</strong> The idea of living a healthy lifestyle has always been at the forefront of people&rsquo;s concern, but the coronavirus scare certainly has people wondering what they can do to keep their systems strong. And a healthy lifestyle can be as simple as getting the right nutrient-rich food, adequate sleep, and avoiding excessive drinking and smoking. In addition:</p>
<ul>
<li>Get regular exercise</li>
<li>Eat plenty of fruits and vegetables</li>
<li>Minimize stress</li>
</ul>
<h2>The Importance of Diet</h2>
<p>Remember that your immune system is like your fighting army. If this system doesn&rsquo;t get the nutrients and energy it needs, the consequences to its ability to defend your body can be significant. Studies have shown that people that live in poverty and suffer from malnourishment are more susceptible to infectious disease.</p>
<p>It is true that as we age the capability of our immune system is reduced. And this is why the elderly are always at higher risk of infection. A lot of it has to do with a decreased count in T cells that are used to fight off infection.</p>
<h2>Keep an Eye on Your Health with Primary Care that Counts</h2>
<p>Here at Healthonomic, we work with various populations to help them maintain a healthy lifestyle and keep their bodies strong and resilient. Whether you are a younger person in their twenties or a grandparent above the age of sixty-five, we are here to help you stay healthy and ensure effective healthcare.</p>
<div style="${CTA}"><strong>Want to keep your body strong and resilient?</strong> Our team is here for every stage of life. <a href="#/contact">Call us today &rarr;</a></div>`
  };

  B['heart-health-exploring-your-heart-and-the-electrocardiogram'] = {
    image: '/assets/uploads/AdobeStock_268288215-1536x1024.jpeg',
    body: `
<p>Heart disease is the leading cause of death for men and women in this country. That means that heart problems affect a large portion of the population. It&rsquo;s why primary care plays such a vital role in everyone&rsquo;s short term and long term wellness. Visits to your primary care doctor and constant monitoring of your heart health means that any problems or abnormalities are caught and dealt with early on. One common way to monitor a patient&rsquo;s heart is through an electrocardiogram.</p>
<h2>What is it?</h2>
<p>An electrocardiogram&mdash;also known as an ECG or EKG&mdash;is a simple test. It measures your heart&rsquo;s electrical activity. In your heart, an electrical stimulus is generated by the sinus node, which is a small mass of specialized tissue located in the right upper chamber. It generates an electrical stimulus regularly and this electrical signal travels down through the conduction pathways and causes the heart&rsquo;s ventricles to contract, which in turn causes them to pump out blood. The two upper chambers of the heart are stimulated first and contract for a short period of time.</p>
<h2>When is the test conducted?</h2>
<p>Your primary care physician might recommend an electrocardiogram under certain circumstances. For example, if you are above the age of fifty and have a history of heart problems in your family. Also, if you are experiencing signs or symptoms that might indicate a heart problem, the test will be recommended. The test will help your doctor determine the cause of your symptoms and/or what kind of treatment might be necessary. These symptoms include:</p>
<ul>
<li>Chest pain</li>
<li>Trouble breathing or constant shortness of breath</li>
<li>Feeling tired or weak</li>
<li>A clear pounding, racing, or fluttering of the heart</li>
<li>Uneven heartbeats</li>
<li>Unusual sounds when your doctor listens to your heart</li>
</ul>
<h2>What does it actually measure?</h2>
<p>The test provides information about your heart rate and rhythm and shows if there is an enlargement of the heart due to conditions like hypertension (high blood pressure) or if there is evidence of any previous heart attack (myocardial infarction).</p>
<h2>Different Kinds of Electrocardiogram</h2>
<p>There are a few different kinds of tests that can be done, each that measure specific and different issues. For example, there is a difference between the resting ECG and the stress ECG.</p>
<h2>Stress Test</h2>
<p>This type of test measures heart problems that may only arise during exercise, i.e. when your body is under some stress. The test will be conducted under certain conditions, mainly having you exercise on a treadmill or stationary bicycle to get the heart rate up.</p>
<h2>Holter Monitor</h2>
<p>This test is a little more involved. This is known as an ambulatory ECG and it records the activity of the heart over a 24 hour period. Your physician will attach electrodes to your chest. They will record information on a portable, battery-operated monitor that is easily carried. It&rsquo;s small and portable enough to fit in your pocket, or belt, or shoulder strap.</p>
<h2>Who gets this test?</h2>
<p>The test is recommended primarily to people who exhibit the symptoms listed above and for people that have risk factors or a history of heart disease. Also, if a patient has chances of an enlarged heart, the test will also be recommended.</p>
<h2>How Can I Protect My Heart?</h2>
<p>Given the prevalence of heart disease in America, it is important to monitor your heart health if you have risk factors or family history. Nevertheless, prevention is always best, and it&rsquo;s why here at Healthonomic Primary Care, we like to take care of our patients by helping them prevent complicated health issues down the road. So how can you take care of your heart?</p>
<ul>
<li><strong>Do some research on your risk factors.</strong> Ask within your family and find out if anybody had a history of heart disease or died of heart complications. This will at least provide you with the information you need to know whether you might be at a slightly higher risk than most.</li>
<li><strong>Quit smoking.</strong> The consumption of tobacco through cigarettes is a very unhealthy habit and can have serious and long-term effects on your heart.</li>
<li><strong>Exercise and maintain regular physical activity.</strong> This is a good recommendation across the board. Maintaining an active lifestyle and making sure you&rsquo;re getting in some regular exercise will strengthen the heart and help prevent heart disease.</li>
<li><strong>Monitor and control your own blood pressure.</strong> Learning a little bit about how to keep an eye on it will give you the peace of mind that everything is going well.</li>
</ul>
<h2>Stay Heart Healthy With Regular Medical Exams</h2>
<p>Our goal here at Healthonomic is always to guide and assist our patients in a better and healthier life. This doesn&rsquo;t always happen overnight. It depends on your age and situation, but maintaining regular doctor visits with a doctor that knows your history and understands your issues will give you a better fighting chance and the best health possible. That, coupled with a healthy diet and exercise, is a winning strategy for a rich and healthy life.</p>
<div style="${CTA}"><strong>Monitoring your heart health?</strong> Learn more about our <a href="#/service/heart-disease">Heart Disease</a> and <a href="#/service/blood-pressure">Blood Pressure</a> services, or <a href="#/contact">book a visit &rarr;</a></div>`
  };

  B['five-lifestyle-changes-to-help-with-high-blood-pressure'] = {
    image: '/assets/uploads/HELTHO-1-1536x772.png',
    body: `
<p>We hear about high blood pressure a lot. That&rsquo;s because many Americans suffer from the condition. The American Heart Association estimates that about 103 million Americans are at risk for heart attacks and strokes. People from all walks of life suffer from the condition for various reasons. And yet, there are often common lifestyle patterns that emerge among many patients. We thought we&rsquo;d take a look at some lifestyle changes people can make that may help in reducing risks while mitigating the likelihood of high blood pressure and cardiac arrest.</p>
<h2>A Brief History of Hypertension</h2>
<p>The study of hypertension can be traced back to ancient cultures. In ancient Chinese and Indian Ayurvedic medicine, the quality of an individual&rsquo;s pulse was seen as an indicator of the cardiovascular health of a person. This pulse quality, of course, could only be assessed by the trained hand of a physician.</p>
<p>In late 19th century London, a physician by the name of Frederick Akbar Mahomed first described the condition that would be known as essential hypertension. This doctor found that high blood pressure could apparently be found in relatively healthy individuals. The modern concept of hypertension, however, did not really get underway until the mercury sphygmomanometer that helped define the systolic and diastolic blood pressure. By the mid 20th century, checking one&rsquo;s blood pressure with this handy tool became standard operating procedure for a routine medical checkup and/or examination at a doctor&rsquo;s office or hospital.</p>
<h2>Natural Ways to Combat High Blood Pressure</h2>
<p>Everybody is different and there is no one-size-fits-all solution for any medical malady. Yet, there are always things that we can do to lead a healthy lifestyle and mitigate the effects of the normal stress of everyday life, aging, and medical conditions.</p>
<h3>1. Exercise and Moving Your Body</h3>
<p>You&rsquo;ve likely heard this before but there are few other things that guarantee to help your health more than regular exercise. Regular exercise strengthens the heart. Whether you are doing cardiovascular exercise or strength training, they can both be beneficial to lowering high blood pressure and improving overall health. And you don&rsquo;t have to start with anything crazy. A simple thirty-minute daily walk can begin to strengthen the heart and realign some functions in the body. Committing to a little more exercise and increasing the frequency or intensity will do even more to get you onto a path of good health.</p>
<h3>2. Avoid Alcoholic Beverages</h3>
<p>Drinking alcohol regularly can increase blood pressure. Alcohol is actually linked to about 16% of blood pressure cases around the world. If you are drinking more than one alcoholic drink per day, you might be doing yourself a bit of damage.</p>
<h3>3. Watch Your Diet</h3>
<p>There are plenty of dietary recommendations that can help with blood pressure. It all begins with avoiding processed foods and sugar and increasing your intake of vegetables, fruits, dairy, tuna, salmon, nuts and seeds, and beans. And don&rsquo;t forget your bananas! One primary thing to keep in mind is your potassium intake, as it is an important factor in lowering blood pressure. The most important aspect of diet changes, of course, is consistency and trying to maintain the changes over a longer period of time. Also, don&rsquo;t forget the berries. Berries are packed with some good stuff called polyphenols, which are natural plant compounds that are good for your heart. In addition to berries and veggies, try calcium-rich foods as well.</p>
<h3>4. Toss the Cigarettes</h3>
<p>This one should go without saying, as you&rsquo;ve likely heard of the bad health effects that cigarettes have on people&rsquo;s health. It is still worth mentioning though as it is an important one and still the leading cause of preventable disease and death in the United States. In 2018, according to the CDC, about 13.7% of adults currently smoke cigarettes. While this number has significantly gone down, if you are in this percentile, it might be time to toss the cigarettes for your heart&rsquo;s sake.</p>
<h3>5. Focus on Altering Your Stress Response</h3>
<p>We all have stress. Whether you have kids, don&rsquo;t have kids, or have lost your job or got a hectic job, you likely have stressors in your life. Whatever the stressor is, you might find that practicing a little meditation or purposeful altering of your stress response might help mitigate the negative effects of stress on your body. So what does this mean? Practice breathing techniques. Practice letting go a little bit. Maybe prayer or maybe simply re-directing the way that stress affects you. While you can&rsquo;t completely eliminate the cause of stress in your life, you can certainly learn to control the way that it affects you and your health. Don&rsquo;t let it overwhelm you or overpower you.</p>
<h2>Visit Your Primary Care Physician to Check and Monitor Your Blood Pressure</h2>
<p>Because it is a common condition, it is important that you keep an eye on it if you have already been deemed to have high blood pressure. If you suspect you have hypertension, pay us a visit here at Healthonomic Primary Care and we will assess your health and what we can do to improve your quality of life and overall well-being.</p>
<div style="${CTA}"><strong>Managing high blood pressure?</strong> Learn about our <a href="#/service/blood-pressure">Blood Pressure</a> services, or <a href="#/contact">book a visit &rarr;</a></div>`
  };

  B['health-and-wellness-tips-for-2020'] = {
    image: '/assets/uploads/AdobeStock_100836078-1536x1024.jpeg',
    body: `
<p>With a new decade comes a new outlook on your life, and that includes your health. Although a major diet revamp works for some people and the gym might push you in just the right way, you don&rsquo;t have to become vegan overnight or commit to a long-term relationship with fitness. Some of the smallest health habits can make a major difference in your life! If this is the year for you to become healthier and happier, we have a few tips we are confident will help.</p>
<h2>Consume Fewer Salts</h2>
<p>According to the <a href="https://www.hsph.harvard.edu/nutritionsource/salt-and-sodium/" target="_blank" rel="noopener">Harvard School of Public Health</a>, Americans consume an average of 1.5 teaspoons of salt per day, which can also be measured at 3,400 milligrams of sodium. This is far more than the amount of sodium our bodies need on a daily basis. Most Americans receive their source of sodium from salt, but by doing away with the high intake of sodium, the chances of suffering from high blood pressure, heart disease, and stroke are low. It is recommended that people limit their intake of sodium to five grams a day, which is equivalent to approximately one teaspoon. This can be done by limiting soy sauce, fish sauce, and other high-sodium condiments when preparing and cooking meals.</p>
<h2>Reduce The Amount of Saturated Fats</h2>
<p>Your body needs a certain amount of fats for energy and for other important functions. Although, too much of it can cause cholesterol to build up in your arteries and cause an unhealthy gain in weight. Fats consumed should be less than 30% of one&rsquo;s total energy intake. To be on the safer side, the <a href="https://www.who.int/" target="_blank" rel="noopener">World Health Organization</a> (WHO) recommends reducing fats to 10% of one&rsquo;s total energy intake, which in turn reduces trans-fats to less than 1% of total energy intake, replacing both saturated and trans-fats with unsaturated fats.</p>
<h2>Exercise Every Day</h2>
<p>Physical activity is defined as any bodily movement produced by skeletal muscles that requires energy expenditure. In simpler terms, anything that makes you break a sweat can be considered physical activity! Whether you prefer to dance, do outdoor aerobics, go for a swim, or wake up early for a morning jog, they&rsquo;re all the same, intended to keep your body in an active and healthy state. Thirty minutes of physical activity a day can go as far as preventing heart disease, diabetes, and many other chronic diseases, according to <a href="https://www.health.harvard.edu/newsletter_article/why-we-should-exercise-and-why-we-dont" target="_blank" rel="noopener">Harvard Medical School</a>.</p>
<p>The amount of exercise you need varies depending on your age, but for most adults between 18 to 50 years of age, 150 minutes of moderate-intensity physical activity throughout the week is optimal.</p>
<h2>Check Your Blood Pressure Regularly</h2>
<p>Hypertension, or high blood pressure, has been coined with the name &ldquo;silent killer.&rdquo; This is due to the fact that many people who have high blood pressure may not be aware of the problem. Those who suffer from extremely high blood pressure often experience symptoms such as headaches, fatigue, difficulty breathing, and more. For individuals whose blood pressure fluctuates, they may rarely experience or encounter any symptoms, making it difficult to detect. Having your blood pressure checked regularly can allow you to know where your health stands, at all times.</p>
<h2>Prepare Your Food In a Safe Manner</h2>
<p>Preparing and cleaning your food can play a major role in your safety and in your overall health. Unsafe foods containing harmful bacteria, viruses, parasites, or chemical substances are credited with being the cause of two hundred different diseases, ranging from diarrhea to cancers, according to an article on <a href="https://www.who.int/news-room/fact-sheets/detail/food-safety" target="_blank" rel="noopener">food safety</a> by WHO. When buying food at your local market or grocery store, it is best that you check and analyze labels carefully, even the actual produce, to ensure that it is safe for consumption. Once you buy your food, there are five steps that can help, which include:</p>
<ol>
<li>Rinse produce with water</li>
<li>Separate raw produce from cooked</li>
<li>Cook raw produce thoroughly</li>
<li>Keep food at safe and appropriate temperatures</li>
<li>Use clean water for raw materials</li>
</ol>
<h2>Make Regular Appointments and Wellness Check-Ups</h2>
<p>It&rsquo;s without a doubt that regular appointments are essential for everyone, but understanding why they are necessary is the most important part. Regular check-ups can help find and detect health problems (if any) before they start or worsen. Additionally, having a health professional help find and diagnose health issues early on increases the effectiveness of treatments, making them more likely to help in your favor. You can start by visiting your nearest health facility to check out the health services, screenings, and treatments that are accessible to you.</p>
<h2>Choose Healthonomic To Help You Lead a Healthier Lifestyle, Today!</h2>
<p>At Healthonomic Primary Care, we believe it&rsquo;s never too late to take up healthier habits for the sake of your health, happiness, and well-being. Our health professionals are not only here to provide treatment and conduct medical assessments but we are also here to provide advice! <a href="#/contact">Contact us</a> today to learn more about how we can help you make a healthy difference in your life.</p>
<div style="${CTA}"><strong>Ready for a healthier year?</strong> Book a <a href="#/service/check-ups">wellness check-up</a> with our team. <a href="#/contact">Get started &rarr;</a></div>`
  };

  B['obesity-in-america-a-growing-concern'] = {
    image: '/assets/uploads/AdobeStock_121790612-1536x1192.jpeg',
    body: `
<p>The United States has not always been a nation in the midst of an obesity epidemic. According to the <a href="https://www.apa.org/pi/families/resources/newsletter/2012/07/childhood-obesity" target="_blank" rel="noopener">American Psychological Association</a>, only 13% of U.S. adults and 5% to 7% of U.S. children were obese during the 1960s and the 1970s. By today&rsquo;s standard, the number has risen drastically. Now, 17% of our children, 32% of adult males, and 36% of female adults are obese. Although obesity has increased across all racial and ethnic groups, it has affected some groups more than others.</p>
<p>Black and Hispanic women are reported to have the highest adult obesity rates. Among children, black adolescent girls and Mexican-American adolescent boys are the most affected by this growing condition. Obesity is now the second leading cause of death in the U.S. By perusing the causes and consequences of obesity, we can reduce these statistics and help people lead healthier lives. Let&rsquo;s go over some of the leading factors that result in obesity.</p>
<h2>Consuming Larger Portions</h2>
<p>The <a href="https://www.publichealth.org/public-awareness/obesity/" target="_blank" rel="noopener">U.S. Department of Agriculture</a> reports that the average American ate almost 20% more calories in the year 2000 than they did in 1983; this is due, in part, to a boom in meat consumption. As of recently, each American consumes an average of 195 pounds of meat every year, compared to just 138 pounds in the 1950s. Consumption of added fats also shot up by around two-thirds over the same period, and grain consumption rose up to 45% since 1970.</p>
<p>Research from the <a href="https://www.who.int/news-room/detail/11-10-2017-tenfold-increase-in-childhood-and-adolescent-obesity-in-four-decades-new-study-by-imperial-college-london-and-who" target="_blank" rel="noopener">World Health Organization</a> found that an increase in fast food sales correlated to a rise in body mass index, and Americans are by far one of the most notorious nations for consuming fast food. Fast food is responsible for 11% of the average American diet. Other studies demonstrate that the full effect of added sugars from sodas and energy drinks are wreaking havoc on American waistlines. It is not only how much we eat, but it has also been about what exactly we&rsquo;re putting into our bodies.</p>
<h2>Confusing &ldquo;Diet&rdquo; for &ldquo;Nutrition&rdquo;</h2>
<p>Diets are basically guides for individuals to eat healthier portions and foods, but the concept has become complex. Consumers are bombarded with wildly mixed messages when it comes to determining what someone should eat and how much is considered a healthy intake. On one spectrum, larger portions, processed packaging, and drive-thru meals are branded as almost classically American&mdash;fast, cheap, and fulfilling. As the years go by, we&rsquo;re spending more time at work and in school than in the kitchens of our homes, thus losing touch on how to eat and how to provide healthier meals. It doesn&rsquo;t help that there has been a cultivation of a seemingly parasitic symbiosis with food in terms of marketing schemes. Low-fat and fat-free products disappear from the supermarket shelves as major companies continue to brand their product, without the concern of adding to the problem of obesity.</p>
<h2>Inactivity Has Become Commonplace</h2>
<p>Lack of exercise is one of the leading culprits in the obesity epidemic. It&rsquo;s been decades since a vast majority of Americans worked in fields and factory floors, where physical activity was prevalent. A far greater majority of us sit throughout our workday.</p>
<p>Most employees want nothing but to go home after a 9-5 day of work and wind down. This means less exercise each day. <a href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0019657" target="_blank" rel="noopener">According to studies</a>, only 20% of jobs today require at least moderate physical activity, as opposed to 50% of jobs in the 1960s. This suggests that Americans burn 120 to 140 fewer calories a day than they did 50 years ago. Add this to the higher amount of calories we&rsquo;re already packing in by consuming unhealthy foods, and we get a perfect recipe for weight gain.</p>
<h2>Other Potential Factors</h2>
<p>A number of other factors are thought to play a role in the obesity epidemic. These include in utero effects of smoking and excessive weight gain among pregnant mothers. Poor sleep, high stress, and lower rates of breastfeeding are also thought to contribute to a child&rsquo;s long term risk of obesity. Of course, these factors are not explicit or solitary causes of obesity, but they are reliable indicators of systemic health failures that are tied to obesity.</p>
<h2>Choose Healthonomic Primary Care to Assess Your Health Today</h2>
<p>Here at Healthonomic Primary Care, we prioritize our patients by assessing each and every aspect of one&rsquo;s health. We will take the necessary examinations and precautions in order to ensure your health is in good shape. <a href="#/contact">Contact us</a> today to learn more about how our doctors can help you and assess any potential or existing conditions.</p>
<div style="${CTA}"><strong>Looking to reach a healthier weight?</strong> Explore our <a href="#/service/weight-loss">Weight Loss</a> support, or <a href="#/contact">book a visit &rarr;</a></div>`
  };

  B['why-you-should-consider-converting-to-a-vegan-lifestyle'] = {
    image: '/assets/uploads/AdobeStock_320398572-1536x518.jpeg',
    body: `
<p>For those who have tried and failed to convert to a vegan lifestyle, they can easily say that it is one of the hardest challenges anyone can take. As children, we are accustomed to consuming meat, vegetables, dairy products, and grains. Each should be distributed fairly, but that is not usually the case. All too often, people eat too much meat, which can lead to countless health concerns. A great way to live a happier, healthier life is by embarking on a vegan lifestyle change. It may sound lofty, but it&rsquo;s doable!</p>
<p>A vegan diet is a part of a lifestyle that excludes the consumption or use of any products that come from animals. Some people may think this is an extreme attempt at leading a healthy lifestyle, but there are plenty of benefits that come with a vegan diet. Vegan food choices are low in saturated fats and are rich in nutrients, which is what our bodies need. If you&rsquo;re thinking about taking up a vegan diet, we support you! Although, there are some important things to know prior to vegan meal planning, and thankfully, we have all the information for you.</p>
<h2>Know the Difference Between Vegan and Vegetarian Diets</h2>
<p>There are important differences between vegan and vegetarian diets. These differences greatly impact food choice and nutritional intake. The main difference is that vegetarians do not consume any source of meat, but they will continue to consume dairy products and eggs. Vegans do not consume animal products, at all. This means that it is less necessary for vegetarians to supplement nutrients. Vegetarians can still extract enough calcium from milk, for example. On the other hand, vegans must find a plant-based source of calcium, in order to stray from animal produce.</p>
<h2>The Benefits of Going Vegan</h2>
<p>A vegan diet can have an extremely positive impact on health. As difficult as it may seem now, it is very possible for a purely plant-based diet to provide the necessary key nutrients to sustain your health. Let&rsquo;s touch on the many benefits that accompany a vegan lifestyle.</p>
<h3>Zero Animal Fats</h3>
<p>Consuming animal fats has been linked to a range of illnesses and health conditions such as diabetes, rheumatoid arthritis, hypertension, heart disease, and various forms of cancer. Animal sources are highly likely to account for thirteen of the top fifteen sources of cholesterol-raising fats in the U.S. By cutting these fats from your diet, the risk of many health issues can be greatly reduced. Animal fats may also be responsible for transferring industrial cancer-linked chemicals and toxins from their environment. Healthy, plant-based oils and fats, such as olive oil, provide the necessary fatty acids we need without increasing the levels of low-density lipoprotein (LDL) cholesterol.</p>
<h3>Improving Your Bone Health</h3>
<p>Calcium intake is important for bone and dental health. For the average American, milk and cheese are the most popular and efficient sources of calcium. If you want to go vegan, figs, kale, spinach, black-eyed peas, and turnip greens can be ideal sources of calcium.</p>
<p>There are plenty of healthier alternatives to milk that vegans can consume. The most popular include soy milk, almond milk, and coconut milk. There&rsquo;s even vegan cheese! By consuming these sources of calcium, you can also expect high intake levels of vitamin D and K, potassium, and magnesium.</p>
<p>Soy, fruit, and vegetables contain healthy amounts of these nutrients, all without causing you to run the risk of consuming animal fats. Vegans have also shown more efficient absorption of calcium and bone metabolism, the process through which new bone tissue is formed and restored.</p>
<h3>Fight Against Chronic Diseases with a Vegan Diet</h3>
<p>Chronic disease is one of the leading causes of death in the United States alone. People who choose a vegan diet are able to decrease their chances of being susceptible to chronic disease significantly. With that in mind, it would be helpful to choose diets that are predominantly plant-based, as they are credited with counteracting an individual&rsquo;s genetic likelihood of developing a chronic disease, such as type 2 diabetes.</p>
<p>A 2008 study shows that bioactive compounds in plant foods can control biological factors that fight against the genetic factors that are linked to some chronic diseases. Researchers maintain that the antioxidants in plant-based foods can combat free radical cells that cause cell damage and inflammation. Other plant compounds can help to control different genes linked to cardiovascular disease, arterial plaque, and tumor growth.</p>
<h2>Adopt a Vegan Lifestyle Gradually</h2>
<p>Even though an entirely plant-based diet has very low health risks, it is still important for you to take the necessary precautions to maintain nutritional balance. It is highly advised that you stop consuming animal products at a slow and steady pace. Completely and immediately doing away with animal products can cause an unhealthy loss of weight. You want your body to become accustomed to your new lifestyle in the right way. You can incorporate one meat alternative first, then progress to other non-animal products, eventually phasing out animal products completely.</p>
<h2>Healthonomic Primary Care Supports Your Lifestyle</h2>
<p>Here at Healthonomic Primary Care, we care about your long-term health and we advise that you do everything you possibly can to lead a healthy lifestyle! Don&rsquo;t hesitate to <a href="#/contact">contact our clinic</a> to learn more about how you can change your diet and eating habits.</p>
<div style="${CTA}"><strong>Thinking about a plant-based change?</strong> Our team can help you do it safely. <a href="#/contact">Talk to us &rarr;</a></div>`
  };

  /*__APPEND__*/
  try { window.dispatchEvent(new Event('ho-blog-ready')); } catch (e) {}
})();
