// app.js

function renderProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;

    let html = '';
    projectsData.forEach((project, index) => {
        // Alternate layout: Even items have image on right, odd items have image on left
        const isEven = index % 2 === 0;
        const textOrder = isEven ? 'lg:order-1' : 'lg:order-2';
        const imgOrder = isEven ? 'lg:order-2' : 'lg:order-1';
        
        // Alternate animations based on layout
        const textAnim = isEven ? 'fade-right' : 'fade-left';
        const imgAnim = isEven ? 'fade-left' : 'fade-right';

        html += `
        <div class="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            
            <div class="lg:w-1/2 w-full ${textOrder}" data-aos="${textAnim}" data-aos-duration="1000">
                <div class="inline-flex items-center gap-2 ${project.theme.badgeBg} px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 shadow-md">
                    <span class="w-1.5 h-1.5 rounded-full bg-current opacity-70 animate-pulse"></span>
                    ${project.category}
                </div>
                <h3 class="text-3xl lg:text-4xl font-black text-navy-500 mb-8 leading-tight">${project.title}</h3>
                
                <div class="space-y-8 relative">
                    <div class="absolute left-3 top-2 bottom-2 w-px bg-slate-200 -z-10"></div>
                    
                    <div class="relative pl-10">
                        <div class="absolute left-0 top-1 w-6 h-6 rounded-full bg-slate-100 border-2 border-slate-300 flex items-center justify-center">
                            <div class="w-2 h-2 rounded-full bg-slate-400"></div>
                        </div>
                        <h4 class="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2 font-mono">The Challenge</h4>
                        <p class="text-slate-600 leading-relaxed text-lg">${project.challenge}</p>
                    </div>
                    
                    <div class="relative pl-10">
                        <div class="absolute left-0 top-1 w-6 h-6 rounded-full bg-slate-100 border-2 border-slate-300 flex items-center justify-center">
                            <div class="w-2 h-2 rounded-full bg-slate-400"></div>
                        </div>
                        <h4 class="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2 font-mono">The Solution</h4>
                        <p class="text-slate-600 leading-relaxed text-lg">${project.solution}</p>
                    </div>
                    
                    <div class="relative pl-10 pt-4">
                        <div class="absolute left-0 top-5 w-6 h-6 rounded-full bg-white border-2 border-emerald shadow-[0_0_10px_rgba(13,175,117,0.4)] flex items-center justify-center">
                            <i data-lucide="check" class="w-3 h-3 text-emerald"></i>
                        </div>
                        <div class="p-6 rounded-2xl border-2 ${project.theme.highlightBg} shadow-sm hover:shadow-md transition-shadow">
                            <h4 class="text-sm font-bold uppercase tracking-widest mb-2 font-mono ${project.theme.highlightText}">Key Outcome</h4>
                            <p class="text-slate-800 font-semibold text-lg">${project.outcome}</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="lg:w-1/2 w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group relative bg-white ${imgOrder}" data-aos="${imgAnim}" data-aos-duration="1000" data-aos-delay="200">
                <div class="absolute inset-0 bg-navy-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
                <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover transition duration-1000 group-hover:scale-110">
                
                <div class="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-xl transform translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20">
                    <i data-lucide="maximize" class="w-6 h-6 text-navy-500"></i>
                </div>
            </div>
        </div>
        `;
    });
    
    container.innerHTML = html;
}

function renderRnD() {
    const container = document.getElementById('rnd-container');
    if (!container) return;

    let html = '';
    rndData.forEach((item, index) => {
        const borderClass = index === rndData.length - 1 ? '' : 'border-b-2 border-slate-100 pb-24';

        html += `
        <div class="${borderClass} flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            
            <div class="lg:w-1/2 w-full order-2 lg:order-1 h-[400px] rounded-3xl overflow-hidden shadow-xl border border-slate-200 group relative" data-aos="zoom-in-right" data-aos-duration="1000">
                <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover transition duration-1000 group-hover:scale-105 group-hover:-rotate-1">
                <div class="absolute inset-0 bg-gradient-to-t from-navy-500/50 to-transparent mix-blend-overlay"></div>
            </div>
            
            <div class="lg:w-1/2 w-full order-1 lg:order-2" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
                <div class="inline-flex items-center gap-2 ${item.theme.badgeBg} px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 shadow-md">
                    <i data-lucide="beaker" class="w-3 h-3"></i> ${item.category}
                </div>
                <h3 class="text-3xl lg:text-4xl font-black text-navy-500 mb-8">${item.title}</h3>
                
                <div class="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg shadow-slate-200/50 space-y-6 hover:-translate-y-1 transition-transform duration-300">
                    <div class="border-b border-slate-100 pb-6">
                        <h4 class="text-sm font-bold text-emerald uppercase tracking-widest mb-3 font-mono flex items-center gap-2">
                            <i data-lucide="target" class="w-4 h-4"></i> The Objective
                        </h4>
                        <p class="text-slate-600 leading-relaxed text-lg">${item.objective}</p>
                    </div>
                    <div class="pt-2">
                        <h4 class="text-sm font-bold text-accent uppercase tracking-widest mb-3 font-mono flex items-center gap-2">
                            <i data-lucide="lightbulb" class="w-4 h-4 text-accent"></i> The Hypothesis
                        </h4>
                        <p class="text-slate-600 leading-relaxed text-lg">${item.hypothesis}</p>
                    </div>
                </div>
            </div>
        </div>
        `;
    });

    container.innerHTML = html;
}

// Initialize everything once the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Render the dynamic content first
    renderProjects();
    renderRnD();
    
    // Create the Lucide icons
    lucide.createIcons(); 
    
    // Initialize Animate On Scroll (AOS) AFTER the content is in the DOM
    AOS.init({
        once: true,           // whether animation should happen only once - while scrolling down
        offset: 100,          // offset (in px) from the original trigger point
        easing: 'ease-out-cubic', // default easing for AOS animations
    });
});
