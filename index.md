---
layout: default
title: Home
---

<section class="section">
  <div class="hero-win">
    <div class="hw-chrome">
      <span class="win-dots"><span class="win-dot r"></span><span class="win-dot y"></span><span class="win-dot g"></span></span>
      <span class="hw-title">vaisr@ntu: ~</span>
    </div>
    <div class="hw-body">
      <img class="hero-logo" src="{{ '/assets/images/VAISR-top.svg' | relative_url }}" alt="VAISR — Visual Intelligence and Spatial Engineering">
      <p class="hero-tagline"><span class="hc">$</span>Towards Visual Intelligence &amp; Spatial Engineering<span class="term-cursor"></span></p>
    </div>
  </div>
  <p class="hero-intro">A central hub for our research projects.</p>
</section>

{% assign project_count = site.data.projects | size %}
<section class="section" id="projects">
  <div class="term-head">
    <span class="th-prompt">$</span><span class="th-cmd">ls projects/</span>
    <span class="th-meta">{{ project_count }} project{% if project_count != 1 %}s{% endif %}</span>
  </div>
  <div class="proj-grid">
    {% for project in site.data.projects %}
    <a class="proj-card" href="{{ project.url | relative_url }}">
      <div class="pc-head">
        <span class="pc-name">{{ project.name }}</span>
        {% if project.venue %}<span class="tag">{{ project.venue }}</span>{% endif %}
      </div>
      <p class="pc-desc">{{ project.description }}</p>
      <div class="pc-go">cd {{ project.name | downcase }} →</div>
    </a>
    {% endfor %}
  </div>
</section>

<section class="section" id="contact">
  <div class="term-head">
    <span class="th-prompt">$</span><span class="th-cmd">cat contact</span>
  </div>
  <div class="social-row">
    <a class="social-link" href="mailto:siyu@cmlab.csie.ntu.edu.tw">
      <svg viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>
      siyu@cmlab.csie.ntu.edu.tw
    </a>
    <a class="social-link" href="https://github.com/VAISR" target="_blank" rel="noopener">
      <svg viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
      github.com/VAISR
    </a>
  </div>
</section>
