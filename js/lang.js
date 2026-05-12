/* ── Hermanos AVE — Language Switcher ── */

const translations = {
  en: {
    /* NAV */
    nav_home:      'Home',
    nav_tequilas:  'Our Tequilas',
    nav_story:     'Our Story',
    nav_contact:   'Contact',
    nav_lang:      'ES',

    /* AGE GATE */
    age_question: 'Are you of legal drinking age?',
    age_sub:      'You must be 18 or over to enter this site',
    age_yes:      'Yes, I am',
    age_no:       'No, I am not',
    age_legal:    'Please drink responsibly · Product of Mexico',

    /* BRAND STRIP */
    strip_agave:       'Blue Agave',
    strip_volume:      'Volume',
    strip_expressions: 'Expressions',

    /* INDEX INTRO */
    index_eyebrow1: 'The winged nectar',
    index_title1:   'Born where the agave<br>meets the sky',
    index_body1:    'Hermanos AVE originates in the heart of Mexico\'s esteemed Tequila region, where the art of tequila-making is deeply rooted. Longed high above, the canary birds find refuge in the majesty of the agave flower — a wild sanctuary that provides them rest and a feast.',
    index_body2:    'With a gentle and elegant flutter, they prepare to embark on a flight, leaving behind their temporary home. High in the sky, their destiny awaits them — a song of freedom and adventure. Welcome to the flight. Welcome to Hermanos AVE, the winged nectar.',

    /* INDEX PRODUCTS */
    index_prod_eyebrow:  'Our expressions',
    index_prod_title:    'Two tequilas, one soul',
    index_repo_badge:    'Reposado Edition',
    index_repo_name:     'Hermanos AVE<br>Reposado',
    index_repo_desc:     'Aged in oak barrels, warm and smooth with deep notes of vanilla, toasted agave, and a whisper of smoke. A tequila that rewards patience and tradition.',
    index_repo_link:     'Explore Reposado →',
    index_silver_badge:  'Silver Edition',
    index_silver_name:   'Hermanos AVE<br>Silver',
    index_silver_desc:   'Crystal clear and vibrant. The purest expression of the blue agave — fresh citrus, floral brightness, and a clean finish that takes flight on the palate.',
    index_silver_link:   'Explore Silver →',

    /* INDEX AVE TEASER */
    index_ave_eyebrow: 'The name behind the bottle',
    index_ave_title:   'AVE means more<br>than you think',
    index_ave_body:    'AVE is derived from "agave" — the plant from which our tequila is crafted — and from the Spanish word for bird. But each letter carries its own meaning: <strong style="color:var(--gold);">Authentic</strong>, <strong style="color:var(--gold);">Venerable</strong>, <strong style="color:var(--gold);">Elegant</strong>.',
    index_ave_cta:     'Discover our story',

    /* INDEX CONTACT TEASER */
    index_contact_eyebrow: 'Find us',
    index_contact_title:   'Looking for Hermanos AVE?',
    index_contact_body:    'Whether you\'re a retailer, a bar, or a tequila lover — we\'d love to hear from you.',
    index_contact_cta:     'Get in touch',

    /* FOOTER */
    footer_nav:       'Navigate',
    footer_products:  'Products',
    footer_follow:    'Follow us',
    footer_legal:     '© 2025 Hermanos AVE Tequila. All rights reserved. Product of Mexico.',
    footer_drink_short: 'Please drink responsibly · 18+ only',

    /* STORY PAGE */
    story_eyebrow_hero: 'The winged nectar',
    story_hero_title:   'Our story',
    story_hero_sub:     'A bond between brothers. A passion for Mexico\'s finest spirit. A name that takes flight.',
    story_eyebrow1:     'Where it all began',
    story_title1:       'From the heart<br>of Jalisco',
    story_body1:        'Hermanos AVE originates in the heart of Mexico\'s esteemed Tequila region — Jalisco — where the art of tequila-making is not just a craft, but a way of life deeply rooted across generations.',
    story_body2:        'The brand was born from a brotherhood. "Hermanos" — brothers in Spanish — represents the bond that fuels our passion for crafting tequila. A passion that goes beyond the bottle, into the land, the agave, and the spirit of Mexico itself.',
    story_body3:        'Every bottle of Hermanos AVE is made especially imported from Mexico to preserve the flavours and traditions that have defined this remarkable drink for centuries. No shortcuts. No compromises. Only the authentic.',
    story_vp_label:     'Value proposition',
    story_vp_quote:     '"Tequila Hermanos AVE stands out by offering a unique experience that fuses the <strong style=\'color:var(--gold);font-style:normal;\'>tradition</strong> of tequila with a <strong style=\'color:var(--gold);font-style:normal;\'>modern</strong> touch. A pioneer in bringing the authentic and elegant flavors of Mexico to new horizons."',
    story_vp_attr:      'Hermanos AVE · Brand Manifesto',
    story_detail_region:      'Region',
    story_detail_agave_label: 'Agave',
    story_detail_agave_val:   '100% Blue Agave',
    story_detail_desig:       'Designation',
    story_detail_trad_label:  'Tradition',
    story_detail_trad_val:    'Artisan methods',
    story_eyebrow2:     'The name',
    story_ave_title:    'What AVE means',
    story_ave_intro:    'AVE is derived from "agave" — the plant from which our tequila is crafted — and from the Spanish word for bird. But each letter carries its own meaning, woven into everything we do.',
    story_a_word:       'Authentic',
    story_a_desc:       'This represents the traditional craftsmanship of the brand, highlighting the use of genuine 100% agave and production methods that honour generations of Mexican tequila heritage.',
    story_v_word:       'Venerable',
    story_v_desc:       'Worthy of deep respect through age and tradition. This speaks to the generations of Mexican artisans whose mastery and dedication earned tequila-making its rightful place among the world\'s great spirits.',
    story_e_word:       'Elegant',
    story_e_desc:       'This tequila embodies elegance in every sip, leaving a lasting impression of refinement and tradition. Like the birds that inspired our name, Hermanos AVE moves with grace.',
    story_quote1:       'Longed high above, the canary birds find refuge in the majesty of the agave flower, a wild sanctuary that provides them rest and a feast. The breeze dances among the calyx, whispering inaudible tales, as the sun\'s rays embrace the birds\' soft feathers and the flower\'s nectar.',
    story_quote2:       'With a gentle and elegant flutter, they prepare to embark on a flight, leaving behind their temporary home. High in the sky, their destiny awaits them — a song of freedom and adventure.',
    story_quote_sign:   'Welcome to the flight. Hermanos AVE, the winged nectar.',
    story_eyebrow3:     'Our journey',
    story_timeline_title: 'How we got here',
    story_timeline_sub:   'From a passion born between brothers to a brand that carries the spirit of Mexico across borders — this is the story of Hermanos AVE.',
    story_t1_title:     'The beginning',
    story_t1_body:      'Two brothers discover their shared passion for authentic Mexican tequila and a vision: to bring the true flavours of Jalisco to new horizons, without compromise.',
    story_t2_title:     'Finding the source',
    story_t2_body:      'Hermanos AVE is sourced directly from master distillers in Jalisco — artisans who have been crafting tequila for generations, using only 100% Blue Weber agave grown in the rich volcanic soil of the region.',
    story_t3_title:     'The bottle is born',
    story_t3_body:      'The iconic Hermanos AVE bottle is designed — a clean, architectural vessel hand-printed with the agave flower illustration in gold, topped with a natural wood cork.',
    story_t4_title:     'Wings of tradition, elevated taste',
    story_t4_body:      'With both the Silver and Reposado expressions ready, Hermanos AVE takes flight — bringing the winged nectar to bars, restaurants, and tequila lovers who demand something genuine.',
    story_values_eyebrow: 'What we stand for',
    story_values_title:   'Our values',
    story_val1_title:   'Authenticity',
    story_val1_body:    'Traditional craftsmanship and genuine 100% agave. No shortcuts, no compromises.',
    story_val2_title:   'Quality',
    story_val2_body:    'Every bottle meets the highest standards — from agave selection to final bottling and labelling.',
    story_val3_title:   'Heritage',
    story_val3_body:    'Deep respect for Mexican tequila culture and the generations of artisans who perfected the craft.',
    story_val4_title:   'Sustainability',
    story_val4_body:    'Committed to responsible production practices that support local communities and protect the land.',
    story_cta_eyebrow: 'Ready to taste the story?',
    story_cta_title:   'Explore our expressions',
    story_cta_body:    'Two tequilas, crafted with purpose. Each bottle a chapter of the Hermanos AVE story.',
    story_cta_btn1:    'Our tequilas',
    story_cta_btn2:    'Get in touch',
    hero_tagline:   'Wings of tradition, elevated taste',
    hero_subtitle:  'Born in Jalisco, crafted for the world.',
    hero_cta1:      'Discover our tequilas',
    hero_cta2:      'Our story',

    /* INDEX — BRAND STRIP */
    strip_agave:    'Blue Agave',
    strip_vol:      'Alc. Vol.',
    strip_origin:   'Origin',
    strip_origin_v: 'Jalisco, MX',
    strip_craft:    'Hand-crafted',

    /* INDEX — ABOUT BLOCK */
    about_eyebrow:  'Our Spirit',
    about_title:    'Two brothers. One calling.',
    about_body:     'Hermanos AVE was born from a shared love of the land and a deep respect for the art of tequila. Every bottle carries the soul of Jalisco — the agave fields, the open skies, and the birds that first inspired our name.',
    about_cta:      'Read our story',

    /* INDEX — PRODUCT TEASE */
    prod_eyebrow:     'Our Expressions',
    prod_title:       'Crafted with intention.',
    prod_silver_ed:   'Silver Edition',
    prod_silver_name: 'Tequila Silver',
    prod_silver_desc: 'Unaged and brilliantly fresh. Crystal clear with bright citrus and floral notes.',
    prod_silver_cta:  'Explore Silver',
    prod_repo_ed:     'Reposado Edition',
    prod_repo_name:   'Tequila Reposado',
    prod_repo_desc:   'Rested in oak for a smooth, warm depth. Vanilla and toasted agave linger long.',
    prod_repo_cta:    'Explore Reposado',
    prod_main_cta:    'View all expressions',

    /* INDEX — LIFESTYLE */
    life_eyebrow: 'The Hermanos AVE Way',
    life_title:   'Sip slowly. Savour everything.',
    life_body:    'Good tequila is never rushed. It\'s a conversation starter, a moment of pause, a celebration of craft.',
    life_cta:     'Discover how to enjoy',

    /* INDEX — FOOTER */
    footer_tagline:  'Wings of tradition, elevated taste.',
    footer_subtitle: 'Born in Jalisco, crafted for the world.',
    footer_nav:      'Navigation',
    footer_legal:    '© 2025 Hermanos AVE Tequila. All rights reserved.',
    footer_drink:    'Drink responsibly. Must be of legal drinking age.',

    /* PRODUCTS PAGE */
    products_hero_title: 'Our Tequilas',
    products_hero_sub:   'Every drop tells a story of land, craft and time.',
    silver_edition:  'Silver Edition',
    silver_label:    'Silver Edition · Blue Label',
    silver_name:     'Hermanos AVE\nTequila Silver',
    silver_desc:     'Unaged and unapologetic, our Silver captures the pure soul of the blue agave. Crystal clear and brilliantly fresh — this is the tequila in its most natural form. Bright citrus and floral notes dance freely, like the birds that inspired our name, ready to take flight on your palate.',
    silver_tasting:  'Tasting notes',
    silver_enquire:  'Enquire for pricing',
    silver_avail:    'Available now',
    silver_cta1:     'Enquire about this expression',
    silver_cta2:     'Our story',
    silver_agave:    'Agave',
    silver_origin:   'Origin',
    silver_process:  'Process',
    silver_size:     'Bottle Size',
    silver_vol:      'Alc. Vol.',
    silver_style:    'Style',
    silver_cert:     'Certification',

    repo_edition:   'Reposado Edition',
    repo_label:     'Reposado Edition · Gold Label',
    repo_name:      'Hermanos AVE\nTequila Reposado',
    repo_desc:      'Rested in American white oak barrels, our Reposado is a bridge between the earth and the sky. Smooth and complex, with warm vanilla, toasted agave and a whisper of oak that lingers like a golden sunset over Jalisco.',
    repo_tasting:   'Tasting notes',
    repo_soldout:   'Coming soon',
    repo_notify:    'Notify me when available',
    repo_ageing:    'Ageing',
    repo_cert:      'Certification',

    serve_eyebrow:  'How to enjoy',
    serve_title:    'Best served with intention',
    serve_neat:     'Neat',
    serve_neat_d:   'Sipped slowly at room temperature. Let the agave speak for itself. The truest way to experience Hermanos AVE.',
    serve_rocks:    'On the rocks',
    serve_rocks_d:  'A single large ice cube opens up the Silver\'s brightness, letting the citrus notes bloom freely in the glass.',
    serve_cocktail: 'In a cocktail',
    serve_cocktail_d: 'The Silver shines in a Paloma or Margarita — its clean brightness elevating every sip into a celebration.',

    /* STORY PAGE */
    story_hero_title: 'Our Story',
    story_eyebrow1: 'The Beginning',
    story_title1:   'Born from the land.',
    story_eyebrow2: 'The Name',
    story_title2:   'AVE — the bird, the spirit.',
    story_eyebrow3: 'The Craft',
    story_title3:   'From field to bottle.',
    story_eyebrow4: 'The Vision',
    story_title4:   'Crafted for the world.',

    /* CONTACT PAGE */
    contact_hero_title: 'Contact',
    contact_hero_sub:   'We\'d love to hear from you.',
    contact_name:    'Your name',
    contact_email:   'Email address',
    contact_subject: 'Subject',
    contact_message: 'Your message',
    contact_send:    'Send message',
    contact_info:    'Get in touch',
  },

  es: {
    /* AGE GATE */
    age_question: '¿Eres mayor de edad legal para beber?',
    age_sub:      'Debes tener 18 años o más para entrar a este sitio',
    age_yes:      'Sí, soy mayor de edad',
    age_no:       'No, soy menor de edad',
    age_legal:    'Bebe con responsabilidad · Producto de México',

    /* BRAND STRIP */
    strip_agave:       'Agave Azul',
    strip_volume:      'Volumen',
    strip_expressions: 'Expresiones',

    /* INDEX INTRO */
    index_eyebrow1: 'El néctar alado',
    index_title1:   'Nacido donde el agave<br>toca el cielo',
    index_body1:    'Hermanos AVE nace en el corazón de la reconocida región tequilera de México, donde el arte de hacer tequila tiene profundas raíces. En lo alto, los canarios encuentran refugio en la majestuosidad de la flor del agave — un santuario salvaje que les brinda descanso y festín.',
    index_body2:    'Con un aleteo suave y elegante, se preparan para emprender el vuelo, dejando atrás su hogar temporal. En lo alto del cielo, su destino los aguarda — un canto de libertad y aventura. Bienvenido al vuelo. Bienvenido a Hermanos AVE, el néctar alado.',

    /* INDEX PRODUCTS */
    index_prod_eyebrow:  'Nuestras expresiones',
    index_prod_title:    'Dos tequilas, un alma',
    index_repo_badge:    'Edición Reposado',
    index_repo_name:     'Hermanos AVE<br>Reposado',
    index_repo_desc:     'Añejado en barricas de roble, suave y cálido con profundas notas de vainilla, agave tostado y un susurro de humo. Un tequila que recompensa la paciencia y la tradición.',
    index_repo_link:     'Explorar Reposado →',
    index_silver_badge:  'Edición Silver',
    index_silver_name:   'Hermanos AVE<br>Silver',
    index_silver_desc:   'Cristalino y vibrante. La expresión más pura del agave azul — cítricos frescos, luminosidad floral y un final limpio que alza el vuelo en el paladar.',
    index_silver_link:   'Explorar Silver →',

    /* INDEX AVE TEASER */
    index_ave_eyebrow: 'El nombre detrás de la botella',
    index_ave_title:   'AVE significa más<br>de lo que piensas',
    index_ave_body:    'AVE viene de "agave" — la planta de la que se elabora nuestro tequila — y de la palabra española para pájaro. Pero cada letra lleva su propio significado: <strong style="color:var(--gold);">Auténtico</strong>, <strong style="color:var(--gold);">Venerable</strong>, <strong style="color:var(--gold);">Elegante</strong>.',
    index_ave_cta:     'Descubre nuestra historia',

    /* INDEX CONTACT TEASER */
    index_contact_eyebrow: 'Encuéntranos',
    index_contact_title:   '¿Buscas Hermanos AVE?',
    index_contact_body:    'Ya seas distribuidor, bar o amante del tequila — nos encantaría saber de ti.',
    index_contact_cta:     'Contáctanos',

    /* FOOTER */
    footer_nav:       'Navegación',
    footer_products:  'Productos',
    footer_follow:    'Síguenos',
    footer_legal:     '© 2025 Hermanos AVE Tequila. Todos los derechos reservados. Producto de México.',
    footer_drink_short: 'Bebe con responsabilidad · Solo mayores de 18',

    /* STORY PAGE */
    story_eyebrow_hero: 'El néctar alado',
    story_hero_title:   'Nuestra historia',
    story_hero_sub:     'Un vínculo entre hermanos. Una pasión por el mejor espíritu de México. Un nombre que alza el vuelo.',
    story_eyebrow1:     'Donde todo comenzó',
    story_title1:       'Del corazón<br>de Jalisco',
    story_body1:        'Hermanos AVE nace en el corazón de la reconocida región tequilera de México — Jalisco — donde el arte de hacer tequila no es solo un oficio, sino una forma de vida profundamente arraigada a través de generaciones.',
    story_body2:        'La marca nació de una hermandad. "Hermanos" representa el vínculo que alimenta nuestra pasión por crear tequila. Una pasión que va más allá de la botella, hacia la tierra, el agave y el espíritu de México.',
    story_body3:        'Cada botella de Hermanos AVE es importada especialmente desde México para preservar los sabores y tradiciones que han definido esta extraordinaria bebida durante siglos. Sin atajos. Sin compromisos. Solo lo auténtico.',
    story_vp_label:     'Propuesta de valor',
    story_vp_quote:     '"Tequila Hermanos AVE destaca al ofrecer una experiencia única que fusiona la <strong style=\'color:var(--gold);font-style:normal;\'>tradición</strong> del tequila con un toque <strong style=\'color:var(--gold);font-style:normal;\'>moderno</strong>. Pionero en llevar los auténticos y elegantes sabores de México a nuevos horizontes."',
    story_vp_attr:      'Hermanos AVE · Manifiesto de Marca',
    story_detail_region:      'Región',
    story_detail_agave_label: 'Agave',
    story_detail_agave_val:   '100% Agave Azul',
    story_detail_desig:       'Denominación',
    story_detail_trad_label:  'Tradición',
    story_detail_trad_val:    'Métodos artesanales',
    story_eyebrow2:     'El nombre',
    story_ave_title:    'Qué significa AVE',
    story_ave_intro:    'AVE viene de "agave" — la planta de la que se elabora nuestro tequila — y de la palabra española para pájaro. Pero cada letra lleva su propio significado, tejido en todo lo que hacemos.',
    story_a_word:       'Auténtico',
    story_a_desc:       'Representa la artesanía tradicional de la marca, destacando el uso genuino de agave 100% y métodos de producción que honran generaciones de patrimonio tequilero mexicano.',
    story_v_word:       'Venerable',
    story_v_desc:       'Digno de profundo respeto por su edad y tradición. Habla de las generaciones de artesanos mexicanos cuya maestría y dedicación ganaron al tequila su lugar entre los grandes destilados del mundo.',
    story_e_word:       'Elegante',
    story_e_desc:       'Este tequila encarna la elegancia en cada sorbo, dejando una impresión duradera de refinamiento y tradición. Como las aves que inspiraron nuestro nombre, Hermanos AVE se mueve con gracia.',
    story_quote1:       'En lo alto, los canarios encuentran refugio en la majestuosidad de la flor del agave, un santuario salvaje que les brinda descanso y festín. La brisa danza entre el cáliz, susurrando historias inaudibles, mientras los rayos del sol abrazan las suaves plumas de las aves y el néctar de la flor.',
    story_quote2:       'Con un aleteo suave y elegante, se preparan para emprender el vuelo, dejando atrás su hogar temporal. En lo alto del cielo, su destino los aguarda — un canto de libertad y aventura.',
    story_quote_sign:   'Bienvenido al vuelo. Hermanos AVE, el néctar alado.',
    story_eyebrow3:     'Nuestro camino',
    story_timeline_title: 'Cómo llegamos aquí',
    story_timeline_sub:   'De una pasión nacida entre hermanos a una marca que lleva el espíritu de México más allá de las fronteras — esta es la historia de Hermanos AVE.',
    story_t1_title:     'El comienzo',
    story_t1_body:      'Dos hermanos descubren su pasión compartida por el tequila mexicano auténtico y una visión: llevar los verdaderos sabores de Jalisco a nuevos horizontes, sin compromisos.',
    story_t2_title:     'Encontrando el origen',
    story_t2_body:      'Hermanos AVE se abastece directamente de maestros destiladores en Jalisco — artesanos que han elaborado tequila durante generaciones, usando solo agave azul 100% cultivado en el rico suelo volcánico de la región.',
    story_t3_title:     'Nace la botella',
    story_t3_body:      'Se diseña la icónica botella de Hermanos AVE — un recipiente limpio y arquitectónico con la ilustración de la flor del agave impresa en dorado, coronada con un corcho de madera natural.',
    story_t4_title:     'De la raíz al cielo, un sabor sin límites',
    story_t4_body:      'Con las expresiones Silver y Reposado listas, Hermanos AVE alza el vuelo — llevando el néctar alado a bares, restaurantes y amantes del tequila que exigen algo genuino.',
    story_values_eyebrow: 'En lo que creemos',
    story_values_title:   'Nuestros valores',
    story_val1_title:   'Autenticidad',
    story_val1_body:    'Artesanía tradicional y agave 100% genuino. Sin atajos, sin compromisos.',
    story_val2_title:   'Calidad',
    story_val2_body:    'Cada botella cumple los más altos estándares — desde la selección del agave hasta el embotellado y etiquetado final.',
    story_val3_title:   'Herencia',
    story_val3_body:    'Profundo respeto por la cultura tequilera mexicana y las generaciones de artesanos que perfeccionaron el arte.',
    story_val4_title:   'Sostenibilidad',
    story_val4_body:    'Comprometidos con prácticas de producción responsables que apoyan las comunidades locales y protegen la tierra.',
    story_cta_eyebrow: '¿Listo para saborear la historia?',
    story_cta_title:   'Explora nuestras expresiones',
    story_cta_body:    'Dos tequilas, elaborados con propósito. Cada botella, un capítulo de la historia de Hermanos AVE.',
    story_cta_btn1:    'Nuestros tequilas',
    story_cta_btn2:    'Contáctanos',
    nav_tequilas:  'Nuestros Tequilas',
    nav_story:     'Nuestra Historia',
    nav_contact:   'Contacto',
    nav_lang:      'EN',

    /* INDEX — HERO */
    hero_eyebrow:   'Jalisco, México · 100% Agave Azul',
    hero_tagline:   'De la raíz al cielo, un sabor sin límites',
    hero_subtitle:  'Nacido en Jalisco, creado para el mundo.',
    hero_cta1:      'Descubre nuestros tequilas',
    hero_cta2:      'Nuestra historia',

    /* INDEX — BRAND STRIP */
    strip_agave:    'Agave Azul',
    strip_vol:      'Alc. Vol.',
    strip_origin:   'Origen',
    strip_origin_v: 'Jalisco, MX',
    strip_craft:    'Artesanal',

    /* INDEX — ABOUT BLOCK */
    about_eyebrow:  'Nuestro Espíritu',
    about_title:    'Dos hermanos. Un llamado.',
    about_body:     'Hermanos AVE nació del amor compartido por la tierra y el profundo respeto por el arte del tequila. Cada botella lleva el alma de Jalisco — los campos de agave, los cielos abiertos y las aves que inspiraron nuestro nombre.',
    about_cta:      'Lee nuestra historia',

    /* INDEX — PRODUCT TEASE */
    prod_eyebrow:     'Nuestras Expresiones',
    prod_title:       'Elaborado con intención.',
    prod_silver_ed:   'Edición Silver',
    prod_silver_name: 'Tequila Silver',
    prod_silver_desc: 'Sin añejar, brillantemente fresco. Cristalino con notas cítricas y florales.',
    prod_silver_cta:  'Explorar Silver',
    prod_repo_ed:     'Edición Reposado',
    prod_repo_name:   'Tequila Reposado',
    prod_repo_desc:   'Reposado en roble para una profundidad suave y cálida. Vainilla y agave tostado que perduran.',
    prod_repo_cta:    'Explorar Reposado',
    prod_main_cta:    'Ver todas las expresiones',

    /* INDEX — LIFESTYLE */
    life_eyebrow: 'El Estilo Hermanos AVE',
    life_title:   'Bebe despacio. Saborea todo.',
    life_body:    'El buen tequila nunca se apresura. Es un iniciador de conversación, un momento de pausa, una celebración de la artesanía.',
    life_cta:     'Descubre cómo disfrutarlo',

    /* INDEX — FOOTER */
    footer_tagline:  'De la raíz al cielo, un sabor sin límites.',
    footer_subtitle: 'Nacido en Jalisco, creado para el mundo.',
    footer_nav:      'Navegación',
    footer_legal:    '© 2025 Hermanos AVE Tequila. Todos los derechos reservados.',
    footer_drink:    'Bebe con responsabilidad. Debes ser mayor de edad.',

    /* PRODUCTS PAGE */
    products_hero_title: 'Nuestros Tequilas',
    products_hero_sub:   'Cada gota cuenta una historia de tierra, artesanía y tiempo.',
    silver_edition:  'Edición Silver',
    silver_label:    'Edición Silver · Etiqueta Azul',
    silver_name:     'Hermanos AVE\nTequila Silver',
    silver_desc:     'Sin añejar y sin disculpas, nuestro Silver captura el alma pura del agave azul. Cristalino y brillantemente fresco — este es el tequila en su forma más natural. Notas brillantes de cítricos y flores danzan libremente, como las aves que inspiraron nuestro nombre, listas para alzar vuelo en tu paladar.',
    silver_tasting:  'Notas de cata',
    silver_enquire:  'Consultar precio',
    silver_avail:    'Disponible ahora',
    silver_cta1:     'Consultar sobre esta expresión',
    silver_cta2:     'Nuestra historia',
    silver_agave:    'Agave',
    silver_origin:   'Origen',
    silver_process:  'Proceso',
    silver_size:     'Tamaño de botella',
    silver_vol:      'Alc. Vol.',
    silver_style:    'Estilo',
    silver_cert:     'Certificación',

    repo_edition:   'Edición Reposado',
    repo_label:     'Edición Reposado · Etiqueta Dorada',
    repo_name:      'Hermanos AVE\nTequila Reposado',
    repo_desc:      'Reposado en barricas de roble blanco americano, nuestro Reposado es un puente entre la tierra y el cielo. Suave y complejo, con vainilla cálida, agave tostado y un susurro de roble que perdura como un atardecer dorado sobre Jalisco.',
    repo_tasting:   'Notas de cata',
    repo_soldout:   'Próximamente',
    repo_notify:    'Avísame cuando esté disponible',
    repo_ageing:    'Añejamiento',
    repo_cert:      'Certificación',

    serve_eyebrow:  'Cómo disfrutarlo',
    serve_title:    'Mejor servido con intención',
    serve_neat:     'Solo',
    serve_neat_d:   'Bebido despacio a temperatura ambiente. Deja que el agave hable por sí solo. La forma más auténtica de experimentar Hermanos AVE.',
    serve_rocks:    'Con hielo',
    serve_rocks_d:  'Un solo cubo grande de hielo abre la frescura del Silver, permitiendo que las notas cítricas florezcan libremente en el vaso.',
    serve_cocktail: 'En cóctel',
    serve_cocktail_d: 'El Silver brilla en una Paloma o Margarita — su frescura limpia elevando cada sorbo a una celebración.',

    /* STORY PAGE */
    story_hero_title: 'Nuestra Historia',
    story_eyebrow1: 'Los Orígenes',
    story_title1:   'Nacido de la tierra.',
    story_eyebrow2: 'El Nombre',
    story_title2:   'AVE — el pájaro, el espíritu.',
    story_eyebrow3: 'El Arte',
    story_title3:   'Del campo a la botella.',
    story_eyebrow4: 'La Visión',
    story_title4:   'Creado para el mundo.',

    /* CONTACT PAGE */
    contact_hero_title: 'Contacto',
    contact_hero_sub:   'Nos encantaría saber de ti.',
    contact_name:    'Tu nombre',
    contact_email:   'Correo electrónico',
    contact_subject: 'Asunto',
    contact_message: 'Tu mensaje',
    contact_send:    'Enviar mensaje',
    contact_info:    'Ponte en contacto',
  }
};

function setLang(lang) {
  localStorage.setItem('ha_lang', lang);
  document.documentElement.lang = lang;

  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key] !== undefined) {
      // Preserve inner HTML structure for elements with SVG children
      if (el.getAttribute('data-i18n-html') === 'true') {
        el.innerHTML = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });

  // Update placeholder attributes
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key] !== undefined) {
      el.placeholder = translations[lang][key];
    }
  });

  // Update the lang toggle button label
  const btn = document.getElementById('lang-toggle');
  if (btn) {
    btn.textContent = lang === 'en' ? 'ES' : 'EN';
    btn.setAttribute('aria-label', lang === 'en' ? 'Switch to Spanish' : 'Cambiar a inglés');
  }
}

function toggleLang() {
  const current = localStorage.getItem('ha_lang') || 'en';
  setLang(current === 'en' ? 'es' : 'en');
}

document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('ha_lang') || 'en';
  setLang(saved);
});
