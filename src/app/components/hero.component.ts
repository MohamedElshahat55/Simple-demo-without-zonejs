import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <div class="hero-container position-relative overflow-hidden mb-5">
      <video autoplay muted loop playsinline class="hero-video w-100">
        <source
          src="https://videos.pexels.com/video-files/2620043/2620043-uhd_2560_1440_25fps.mp4"
          type="video/mp4"
        />
      </video>

      <div
        class="hero-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center text-center"
      >
        <div class="container">
          <h1 class="display-3 text-white fw-bold mb-4">
            Discover Amazing Recipes
          </h1>
          <p class="lead text-white mb-4">
            Explore our collection of delicious recipes from around the world
          </p>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .hero-container {
        height: 100vh;
        min-height: 400px;
        max-height: 600px;
      }

      .hero-video {
        object-fit: cover;
        height: 100%;
      }

      .hero-overlay {
        background: rgba(0, 0, 0, 0.5);
      }
    `,
  ],
})
export class HeroComponent {}
