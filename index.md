---
layout: default
title: Home
---

<section class="hero">
  <img src="{{ '/assets/images/VAISR-top.svg' | relative_url }}" alt="VAISR — Visual Intelligence and Spatial Engineering">
</section>

<section class="section">
  <h2 class="section-title">Projects</h2>
  <div class="project-grid">
    {% for project in site.data.projects %}
    <a class="project-card" href="{{ project.url }}">
      <h3>{{ project.name }}</h3>
      <p>{{ project.description }}</p>
    </a>
    {% endfor %}
  </div>
</section>

<section class="section contact">
  <h2 class="section-title">Contact</h2>
  <p>Siyu — <a href="mailto:siyu@cmlab.csie.ntu.edu.tw">siyu@cmlab.csie.ntu.edu.tw</a></p>
</section>
