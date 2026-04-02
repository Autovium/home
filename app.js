function renderProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;

    let html = '';
    projectsData.forEach(project => {
        html += `
        <div class="flex flex-col lg:flex-row gap-10 items-start">
            <div class="lg:w-5/12 w-full">
                <div class="inline-block ${project.theme.badgeBg} px-3 py-1 rounded text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">${project.category}</div>
                <h3 class="text-2xl font-bold text-navy-500 mb-6">${project.title}</h3>
                
                <div class="space-y-6">
                    <div>
                        <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 font-mono">The Challenge</h4>
                        <p class="text-slate-600 leading-relaxed">${project.challenge}</p>
                    </div>
                    <div>
                        <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 font-mono">The Solution</h4>
                        <p class="text-slate-600 leading-relaxed">${project.solution}</p>
                    </div>
                    <div class="p-5 rounded-xl border ${project.theme.highlightBg}">
                        <h4 class="text-xs font-bold uppercase tracking-widest mb-2 font-mono ${project.theme.highlightText}">Key Outcome</h4>
                        <p class="text-slate-800 font-medium">${project.outcome}</p>
                    </div>
                </div>
            </div>
            
            <div class="lg:w-7/12 w-full h-[400px] rounded-2xl overflow-hidden shadow-lg border border-slate-200 group relative bg-white">
                <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover transition duration-700 group-hover:scale-105">
                <div class="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl"></div>
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
        const borderClass = index === rndData.length - 1 ? '' : 'border-b border-slate-200 pb-16';

        html += `
        <div class="${borderClass} flex flex-col lg:flex-row gap-10 items-center">
            <div class="lg:w-1/2 w-full order-2 lg:order-1 h-[350px] rounded-2xl overflow-hidden shadow-md border border-slate-200 group relative">
                <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover transition duration-700 group-hover:scale-105">
                <div class="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl"></div>
            </div>
            
            <div class="lg:w-1/2 w-full order-1 lg:order-2">
                <div class="inline-block ${item.theme.badgeBg} px-3 py-1 rounded text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">${item.category}</div>
                <h3 class="text-2xl font-bold text-navy-500 mb-6">${item.title}</h3>
                
                <div class="space-y-6">
                    <div>
                        <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 font-mono">The Objective</h4>
                        <p class="text-slate-600 leading-relaxed">${item.objective}</p>
                    </div>
                    <div>
                        <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 font-mono">The Hypothesis</h4>
                        <p class="text-slate-600 leading-relaxed">${item.hypothesis}</p>
                    </div>
                </div>
            </div>
        </div>
        `;
    });

    container.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    renderRnD();
    lucide.createIcons(); 
});
