import React from 'react';

const StorySection = () => {
  return (
    <section className="story-section">
      <div className="container">
        <h2>Hue + Neu: The Heart of hueneu</h2>
        <p>
          At hueneu, our name is our philosophy. <strong>"Hue"</strong> represents the vibrant bursts of creativity, the unexpected color palettes, and the evocative imagery that bring stories to life. It's the spark, the emotion, the art.
        </p>
        <p>
          <strong>"Neu"</strong> is the grounding neutrality, the intentional calm, and the sophisticated balance that ensures every design is purposeful and clear. It's the foundation, the clarity, the craft.
        </p>
        <p className="text-poetic">
          Together, they create designs that are not just seen, but felt—quietly bold, mysteriously alluring, and always memorable.
        </p>
        
        <div className="who-knew-moment">
          Who Knew? It's pronounced 'hue-new'. Surprise!
        </div>

        <p style={{marginTop: '3rem'}}>
          We believe in crafting visual narratives that resonate deeply, blending playful curiosity with serene elegance. It's about finding that perfect harmony where your story doesn't just speak, it sings.
        </p>
      </div>
    </section>
  );
};

export default StorySection;
