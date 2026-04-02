// app.js

function renderProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;

    let html = '';
    projectsData.forEach((project, index) => {
        const isLast = index === projectsData.length - 1;
        const borderClass = isLast ? '' : 'border-b border-gray-200 pb-12';
        
        html += `
        <div class="${borderClass}">
            <div class="flex flex-col md:flex-row gap-8 mb-8">
                <div class="md:w-1/3">
                    <h3 class="text-xl font-bold text-slate-800 mb-2">${project.title}</h3>
                    <span class="text-xs font-bold ${project.theme.bg} ${project.theme.text} px-2 py-1 rounded border ${project.theme.border}">${project.category}</span>
                </div>
                <div class="md:w-2/3 space-y-4">
                    <div>
                        <h4 class="text-sm font-bold text-gray-400 uppercase tracking-wide">The Challenge</h4>
                        <p class="text-gray-700">${project.challenge}</p>
                    </div>
                    <div>
                        <h4 class="text-sm font-bold text-gray-400 uppercase tracking-wide">The Solution</h4>
                        <p class="text-gray-700">${project.solution}</p>
                    </div>
                    <div class="${project.theme.bg.replace('/10', '/5')} p-4 rounded border ${project.theme.border}">
                        <h4 class="text-sm font-bold ${project.theme.text} uppercase tracking-wide mb-1">Key Outcome</h4>
                        <p class="${project.theme.outcomeText} font-medium">${project.outcome}</p>
                    </div>
                </div>
            </div>
            <div class="w-full h-80 bg-slate-100 rounded-lg overflow-hidden border border-gray-200 shadow-sm relative group flex items-center justify-center">
                <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover opacity-80 transition duration-700 group-hover:scale-[1.02]">
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
        const isLast = index === rndData.length - 1;
        const borderClass = isLast ? '' : 'border-b border-gray-200 pb-12';

        html += `
        <div class="${borderClass}">
            <div class="flex flex-col md:flex-row gap-8 mb-8">
                <div class="md:w-1/3">
                    <h3 class="text-xl font-bold text-slate-800 mb-2">${item.title}</h3>
                    <span class="text-xs font-bold ${item.theme.bg} ${item.theme.text} px-2 py-1 rounded border ${item.theme.border}">${item.category}</span>
                </div>
                <div class="md:w-2/3 space-y-4">
                    <div>
                        <h4 class="text-sm font-bold text-gray-400 uppercase tracking-wide">The Objective</h4>
                        <p class="text-gray-700">${item.objective}</p>
                    </div>
                    <div>
                        <h4 class="text-sm font-bold text-gray-400 uppercase tracking-wide">The Hypothesis</h4>
                        <p class="text-gray-700">${item.hypothesis}</p>
                    </div>
                </div>
            </div>
            <div class="w-full h-80 bg-slate-100 rounded-lg overflow-hidden border border-gray-200 shadow-sm relative group flex items-center justify-center">
                <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover opacity-80 transition duration-700 group-hover:scale-[1.02]">
            </div>
        </div>
        `;
    });

    container.innerHTML = html;
}

// Initialize the rendering once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    renderRnD();
    lucide.createIcons(); // Re-initialize icons if any were injected dynamically
});
