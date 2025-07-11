// Datos de evaluación
const evaluationData = {
    knowHow: {
        technical: {
            A: [38, 43, 50, 50, 57, 66, 66, 76, 87, 87, 100, 115, 115, 132, 152],
            B: [50, 57, 66, 66, 76, 87, 87, 100, 115, 115, 132, 152, 152, 175, 200],
            C: [66, 76, 87, 87, 100, 115, 115, 132, 152, 152, 175, 200, 200, 230, 264],
            D: [87, 100, 115, 115, 132, 152, 152, 175, 200, 200, 230, 264, 264, 304, 350],
            E: [115, 132, 152, 152, 175, 200, 200, 230, 264, 264, 304, 350, 350, 400, 460],
            F: [152, 175, 200, 200, 230, 264, 264, 304, 350, 350, 400, 460, 460, 528, 608],
            G: [200, 230, 264, 264, 304, 350, 350, 400, 460, 460, 528, 608, 608, 700, 800],
            H: [264, 304, 350, 350, 400, 460, 460, 528, 608, 608, 700, 800, 800, 920, 1056]
        },
        communication: {
            1: 0,
            2: 1,
            3: 2,
            4: 3,
            5: 4,
            6: 5,
            7: 6,
            8: 7
        },
        integration: {
            1: 0,
            2: 1,
            3: 2,
            4: 3,
            5: 4,
            6: 5,
            7: 6,
            8: 7,
            9: 8
        },
        descriptions: {
            technical: {
                A: "BÁSICO: Nociones aritméticas, lectura y escritura elemental. Conocimiento de instrucciones y rutinas simples adquirido a través de breves explicaciones.",
                B: "INTRODUCTORIO: Conocimiento de rutinas de trabajo y métodos estandarizados; conocimiento de datos e información general; manejo de equipos y maquinaria sencilla. El conocimiento se adquiere generalmente por medio de entrenamiento práctico en el trabajo.",
                C: "GENERAL/PROCESO/PROCEDIMIENTO: Conocimientos para la aplicación de métodos y técnicas practicas; procedimientos y procesos de trabajo; habilidad para la operación con materiales, equipos y herramientas especializadas. El conocimiento generalmente se adquiere a través de formación especializada.",
                D: "AVANZADO: Conocimiento amplio y especializado de métodos, técnicas y procesos con conocimiento limitado de las teorías en las que se basa. Este conocimiento generalmente se adquiere a través de formación especializada o larga experiencia práctica en el trabajo.",
                E: "ESPECIALIZADO: Conocimiento contrastado en un campo técnico, científico o especializado basado en la comprensión de teorías y conceptos teóricos, así como en su contexto. Este conocimiento se adquiere normalmente a través de formación profesional o académica o de una amplia experiencia práctica.",
                F: "ESPECIALIZACIÓN MADURA: Conocimiento amplio y profundo de un campo de expertise, que requiere el dominio de diversas prácticas y precedentes, así como de conceptos complejos y principios. Este conocimiento se adquiere a través de una muy profunda y amplia experiencia generalmente reforzada con una formación académica/profesional adicional.",
                G: "ESPECIALIZACIÓN AMPLIA: Conocimiento y autoridad reconocidas en conceptos, principios y prácticas, adquiridos a través de una amplia experiencia en el negocio o de un gran desarrollo en un campo de especialización complejo.",
                H: "REFERENTE: El puesto requiere competencia excepcional y liderazgo en una disciplina científica, con conocimiento y dominio de los principios y teorías y su aplicación. Este nivel podría asociarse con trabajos innovadores."
            },
            communication: {
                1: "1. Comunica: El trato con otros implica principalmente la solicitud y el aporte de información. Se requiere amabilidad, tacto y efectividad.",
                2: "2. Razonamiento: La interacción con otros requiere comprenderles, influirles y darles servicio, aplicando el conocimiento técnico o argumentos racionales que buscan conseguir acciones o la aceptación por su parte.",
                3: "3. Cambio de comportamientos: La interacción con otros implica principalmente influir, desarrollar y motivar personas y generar comportamientos. A menudo implica liderazgo y la creación de un adecuado clima de trabajo.",
                4: "4. Inspiración: Motiva y transforma a otros a través de la comunicación.",
                5: "5. Comunicación Estratégica: Influencia externa a través de la comunicación.",
                6: "6. Comunicación Institucional: Construcción de cultura organizacional a través de la comunicación.",
                7: "7. Voz Pública: Representa a la organización como vocero público."
            },
            integration: {
                1: "T. Focalizado en tareas específicas: Ejecución de una o varias tareas específicas en cuanto a objetivo y contenido con conocimiento limitado del contexto.",
                2: "I. Específica: Ejecución o supervisión de diversas actividades específicas en cuanto a objetivo y contenido. Necesidad de interacción con otros trabajadores y conocimiento de las actividades relacionadas.",
                3: "II. Homogénea: Integración de operaciones y servicios relacionados en cuanto a su naturaleza y objetivo. Se requiere coordinación con funciones relacionadas.",
                4: "III. Heterogénea: Integración operativa o conceptual de funciones heterogéneas en naturaleza y objetivo o críticas para la consecución de los objetivos globales de negocio.",
                5: "IV. Amplia: Integración estratégica y liderazgo de operaciones de negocio importantes o dirección de una función estratégica transversal en la compañía.",
                6: "V. Ecosistemas: Integración interinstitucional y coordinación con múltiples organizaciones.",
                7: "VI. Redes Abiertas: Integración multisectorial y coordinación compleja entre diferentes sectores.",
                8: "VII. Visión Global: Integración internacional y coordinación a nivel global."
            }
        }
    },
    
    problemSolving: {
        complexity: {
            1: [0.1, 0.12, 0.14, 0.16, 0.19, 0.22, 0.25, 0.29, 0.33, 0.38, 0.43, 0.5, 0.57, 0.66, 0.76],
            2: [0.12, 0.14, 0.16, 0.19, 0.22, 0.25, 0.29, 0.33, 0.38, 0.43, 0.5, 0.57, 0.66, 0.76, 0.87],
            3: [0.14, 0.16, 0.19, 0.22, 0.25, 0.29, 0.33, 0.38, 0.43, 0.5, 0.57, 0.66, 0.76, 0.87, 1.0],
            4: [0.16, 0.19, 0.22, 0.25, 0.29, 0.33, 0.38, 0.43, 0.5, 0.57, 0.66, 0.76, 0.87, 1.0, 1.15],
            5: [0.19, 0.22, 0.25, 0.29, 0.33, 0.38, 0.43, 0.5, 0.57, 0.66, 0.76, 0.87, 1.0, 1.15, 1.32]
        },
        thinkingFreedom: {
            A: 0,
            B: 1,
            C: 2,
            D: 3,
            E: 4,
            F: 5,
            G: 6,
            H: 7
        },
        descriptions: {
            complexity: {
                1: "1. Repetitivo: Situaciones idénticas cuya solución requiere una simple elección entre cosas aprendidas.",
                2: "2. Con modelos: Situaciones similares cuya solución requiere una elección crítica entre alternativas conocidas.",
                3: "3. Variable: Situaciones diferentes que requieren la identificación de patrones, la aplicación de juicios y la selección de una solución dentro del área de conocimiento profesional y del conocimiento adquirido.",
                4: "4. Adaptación: Las situaciones requieren constantemente de la adaptación o del desarrollo de nuevas soluciones a través de un pensamiento analítico, de la evaluación, la interpretación la creatividad y la innovación.",
                5: "5. Sin precedentes: Situaciones novedosas e inexploradas que requieren el desarrollo de nuevos conceptos y de soluciones imaginativas para las que no existen precedentes."
            },
            thinkingFreedom: {
                A: "A. RUTINA ESTRICTA: Actuación dentro de unas instrucciones muy detalladas y precisas. Existencia de un supervisor permanente.",
                B: "B. RUTINA: Actuación dentro de prácticas e instrucciones detalladas y estandarizadas. Soporte y ejemplos disponibles de manera inmediata.",
                C: "C. SEMI-RUTINA: Actuación dentro de procedimientos pre-definidos, diversificados. Gran cantidad de precedentes cubren la mayoría de las situaciones. Soporte fácilmente disponible.",
                D: "D. ESTANDARIZADO: Actuación dentro de procedimientos, estándares y precedentes múltiples y sustancialmente diferentes. Soporte en caso necesario.",
                E: "E. DEFINICIÓN CLARA: Actuación dentro de políticas, principios y objetivos específicos claramente definidos.",
                F: "F. DEFINICIÓN AMPLIA: Actuación dentro de políticas y objetivos definidos de manera amplia.",
                G: "G. DEFINICIÓN GENÉRICA: Actuación dentro de políticas generales, principios y metas de la organización.",
                H: "H. ABSTRACTO: Actuación dentro del marco de leyes generales científicas o de la naturaleza; de valores culturales, filosóficos o de negocio."
            }
        }
    },
    
    responsibility: {
        freedom: {
            A: [8, 9, 10, 12, 14, 16, 19, 22, 25, 29, 33, 38, 43, 50, 57],
            B: [12, 14, 16, 19, 22, 25, 29, 33, 38, 43, 50, 57, 66, 76, 87],
            C: [19, 22, 25, 29, 33, 38, 43, 50, 57, 66, 76, 87, 100, 115, 132],
            D: [29, 33, 38, 43, 50, 57, 66, 76, 87, 100, 115, 132, 152, 175, 200],
            E: [43, 50, 57, 66, 76, 87, 100, 115, 132, 152, 175, 200, 230, 264, 304],
            F: [66, 76, 87, 100, 115, 132, 152, 175, 200, 230, 264, 304, 350, 400, 460],
            G: [100, 115, 132, 152, 175, 200, 230, 264, 304, 350, 400, 460, 528, 608, 700],
            H: [152, 175, 200, 230, 264, 304, 350, 400, 460, 528, 608, 700, 800, 920, 1056]
        },
        impactNature: {
            R: 0,
            C: 1,
            S: 2,
            P: 3
        },
        magnitude: {
            N: 0,
            1: 1,
            2: 2,
            3: 3,
            4: 4
        },
        descriptions: {
            freedom: {
                A: "A. CONTROL ESTRICTO: Opera según instrucciones directas y detalladas, con una supervisión estrecha y permanente.",
                B: "B. CONTROL: Sujeto a instrucciones y rutinas establecidas de trabajo, bajo supervisión estrecha.",
                C: "C. ESTANDARIZADO: Opera dentro de prácticas y procedimientos estandarizados, instrucciones generales de trabajo y supervisión sobre el avance del trabajo y los resultados.",
                D: "D. REGULACIÓN GENERAL: Opera dentro de prácticas y procedimientos cubiertos por precedentes o por políticas definidas. Supervisión sobre los resultados.",
                E: "E. DIRECCIÓN: Sujeto a prácticas amplias y procedimientos cubiertos por precedentes y políticas. Dirección sobre la gestión.",
                F: "F. DIRECCIÓN GENERAL: Sujeto a dirección genérica y a objetivos y políticas amplias.",
                G: "G. GUIA: Sujetos solamente a una guía general; a objetivos organizativos amplios y a orientaciones estratégicas.",
                H: "H. GUÍA ESTRATÉGICA: Dado el tamaño de la organización y su complejidad, solamente se encuentran sujetos a orientaciones genéricas en función de las tendencias del negocio."
            },
            impactNature: {
                R: "R. Repetitivo: Impacto rutinario y repetitivo en las operaciones.",
                C: "C. Circunstancial: Impacto ocasional en situaciones específicas.",
                S: "S. Servicio: Impacto directo en la calidad de los servicios prestados.",
                P: "P. Primario: Impacto directo y significativo en los resultados principales del negocio."
            },
            magnitude: {
                N: "N. No cuantificada: Impacto cualitativo que no se mide en términos cuantitativos.",
                1: "1. Muy pequeño: Impacto en un área muy limitada de la organización.",
                2: "2. Pequeño: Impacto en un área específica pero más amplia que el nivel 1.",
                3: "3. Medio: Impacto a nivel de departamento o unidad funcional.",
                4: "4. Grande: Impacto en toda la organización o en resultados estratégicos."
            }
        }
    },
    
    jobLevels: [
        { min: 0, max: 200, level: "Nivel 8", description: "Puestos operativos básicos con tareas rutinarias y supervisión directa." },
        { min: 201, max: 400, level: "Nivel 9", description: "Puestos operativos especializados con cierta autonomía en tareas definidas." },
        { min: 401, max: 600, level: "Nivel 10", description: "Puestos técnicos con conocimientos especializados y responsabilidad sobre procesos." },
        { min: 601, max: 800, level: "Nivel 11", description: "Puestos técnicos avanzados o supervisores con responsabilidad sobre equipos." },
        { min: 801, max: 1000, level: "Nivel 12", description: "Puestos de supervisión o coordinación con responsabilidad sobre áreas funcionales." },
        { min: 1001, max: 1200, level: "Nivel 13", description: "Puestos de mando intermedio con responsabilidad sobre departamentos." },
        { min: 1201, max: 1400, level: "Nivel 14", description: "Puestos directivos con responsabilidad sobre múltiples áreas funcionales." },
        { min: 1401, max: 1600, level: "Nivel 15", description: "Alta dirección con responsabilidad estratégica sobre divisiones completas." },
        { min: 1601, max: 1800, level: "Nivel 16", description: "Dirección ejecutiva con responsabilidad sobre la organización completa." },
        { min: 1801, max: 2000, level: "Nivel 17", description: "Dirección general con responsabilidad estratégica global." },
        { min: 2001, max: 2200, level: "Nivel 18", description: "Alta dirección ejecutiva en organizaciones complejas." },
        { min: 2201, max: 2400, level: "Nivel 19", description: "Dirección corporativa en grandes organizaciones." },
        { min: 2401, max: 2600, level: "Nivel 20", description: "Máximo nivel ejecutivo en organizaciones multinacionales." },
        { min: 2601, max: 2800, level: "Nivel 21", description: "Nivel estratégico superior en corporaciones globales." },
        { min: 2801, max: 3000, level: "Nivel 22", description: "Máximo nivel de responsabilidad en organizaciones globales complejas." },
        { min: 3001, max: 3200, level: "Nivel 23", description: "Nivel ejecutivo superior en corporaciones globales." },
        { min: 3201, max: 3400, level: "Nivel 24", description: "Máximo nivel de dirección estratégica global." },
        { min: 3401, max: 3600, level: "Nivel 25", description: "Máximo nivel de responsabilidad en organizaciones globales complejas." }
    ],
    
    profileTypes: {
        "P4": { name: "Perfil Corto P4", description: "Puestos con alta capacidad de resolución de problemas complejos en relación a su conocimiento técnico." },
        "P3": { name: "Perfil Corto P3", description: "Puestos con importante componente de resolución de problemas en relación a su conocimiento técnico." },
        "P2": { name: "Perfil Corto P2", description: "Puestos con mayor enfoque en resolución de problemas que en conocimiento técnico." },
        "P1": { name: "Perfil Corto P1", description: "Puestos con ligero predominio de resolución de problemas sobre conocimiento técnico." },
        "LEVEL": { name: "Perfil Balanceado", description: "Puestos con equilibrio entre conocimiento técnico y capacidad de resolución de problemas." },
        "A1": { name: "Perfil Corto A1", description: "Puestos con ligero predominio de conocimiento técnico sobre resolución de problemas." },
        "A2": { name: "Perfil Corto A2", description: "Puestos con mayor enfoque en conocimiento técnico que en resolución de problemas." },
        "A3": { name: "Perfil Corto A3", description: "Puestos con importante componente de conocimiento técnico en relación a resolución de problemas." },
        "A4": { name: "Perfil Corto A4", description: "Puestos con alta capacidad de conocimiento técnico en relación a resolución de problemas." }
    }
};

// Variables globales
window.currentEvaluation = null;
window.evaluationCharts = {
    levelDistribution: null,
    scoreDistribution: null
};

// Función para mostrar notificaciones
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        ${message}
    `;
    
    const container = document.querySelector('.notification-container');
    if (container) {
        container.appendChild(notification);
        
        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => {
                notification.remove();
            }, 500);
        }, 3000);
    }
}

// Función para validar campos requeridos por sección
function validateSection(sectionId) {
    const section = document.getElementById(sectionId);
    let isValid = true;
    
    const requiredInputs = section.querySelectorAll('[required]');
    requiredInputs.forEach(input => {
        if (!input.value.trim()) {
            input.classList.add('invalid-field');
            setTimeout(() => input.classList.remove('invalid-field'), 500);
            isValid = false;
            
            if (isValid === false) {
                const label = input.previousElementSibling?.textContent || 'Campo';
                showNotification(`Por favor complete el campo: ${label}`, 'error');
            }
        }
    });
    
    return isValid;
}

// Función para cambiar de sección
function goToSection(sectionId) {
    document.querySelectorAll('.form-section').forEach(section => {
        section.classList.remove('active');
    });
    
    document.querySelectorAll('.step').forEach(step => {
        step.classList.remove('active');
    });
    
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.add('active');
    }
    
    const stepNumber = sectionId.split('-')[0];
    const step = document.querySelector(`.step[data-step="${stepNumber}"]`);
    if (step) {
        step.classList.add('active');
    }
    
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Función para cambiar entre contenidos principales
function showContent(contentId) {
    document.querySelectorAll('#evaluationContent, #evaluationsContent, #reportsContent, #settingsContent').forEach(content => {
        content.classList.add('hidden-content');
    });
    
    const content = document.getElementById(contentId);
    if (content) {
        content.classList.remove('hidden-content');
    }
    
    document.querySelectorAll('.nav-links li').forEach(li => {
        li.classList.remove('active');
    });
    
    const activeLink = document.querySelector(`#${contentId.replace('Content', 'Link')}`);
    if (activeLink) {
        activeLink.parentElement.classList.add('active');
    }
    
    if (contentId === 'evaluationsContent') {
        loadEvaluationsList();
    } else if (contentId === 'reportsContent') {
        loadReports();
    }
}

// Función para cargar la lista de evaluaciones
function loadEvaluationsList() {
    const evaluationsList = document.getElementById('evaluationsList');
    if (!evaluationsList) return;
    
    evaluationsList.innerHTML = '<p>Cargando evaluaciones...</p>';
    
    setTimeout(() => {
        const evaluations = JSON.parse(localStorage.getItem('jobEvaluations')) || [];
        
        if (evaluations.length === 0) {
            evaluationsList.innerHTML = '<p>No hay evaluaciones guardadas.</p>';
            return;
        }
        
        evaluationsList.innerHTML = '';
        
        evaluations.forEach(evaluation => {
            const evaluationItem = document.createElement('div');
            evaluationItem.className = 'evaluation-item';
            evaluationItem.innerHTML = `
                <div class="evaluation-info">
                    <h3>${evaluation.jobTitle}</h3>
                    <p>Nivel: ${evaluation.level.level} | Puntaje: ${evaluation.scores.total} | Fecha: ${new Date(evaluation.evaluationDate).toLocaleDateString()}</p>
                </div>
                <div class="evaluation-actions">
                    <button class="btn btn-secondary view-evaluation" data-id="${evaluation.id}">
                        <i class="fas fa-eye"></i> Ver
                    </button>
                    <button class="btn btn-secondary export-evaluation" data-id="${evaluation.id}">
                        <i class="fas fa-download"></i> Exportar
                    </button>
                    <button class="btn btn-secondary delete-evaluation" data-id="${evaluation.id}">
                        <i class="fas fa-trash"></i> Eliminar
                    </button>
                </div>
            `;
            evaluationsList.appendChild(evaluationItem);
        });
        
        document.querySelectorAll('.view-evaluation').forEach(button => {
            button.addEventListener('click', function() {
                const evaluationId = parseInt(this.getAttribute('data-id'));
                viewEvaluation(evaluationId);
            });
        });
        
        document.querySelectorAll('.export-evaluation').forEach(button => {
            button.addEventListener('click', function() {
                const evaluationId = parseInt(this.getAttribute('data-id'));
                exportSavedEvaluation(evaluationId);
            });
        });
        
        document.querySelectorAll('.delete-evaluation').forEach(button => {
            button.addEventListener('click', function() {
                const evaluationId = parseInt(this.getAttribute('data-id'));
                deleteEvaluation(evaluationId);
            });
        });
    }, 500);
}

// Función para eliminar una evaluación
function deleteEvaluation(id) {
    if (confirm('¿Está seguro que desea eliminar esta evaluación?')) {
        let evaluations = JSON.parse(localStorage.getItem('jobEvaluations')) || [];
        evaluations = evaluations.filter(e => e.id !== id);
        localStorage.setItem('jobEvaluations', JSON.stringify(evaluations));
        showNotification('Evaluación eliminada correctamente', 'success');
        loadEvaluationsList();
    }
}

// Función para ver una evaluación guardada
function viewEvaluation(id) {
    const evaluations = JSON.parse(localStorage.getItem('jobEvaluations')) || [];
    const evaluation = evaluations.find(e => e.id === id);
    
    if (!evaluation) {
        showNotification('No se encontró la evaluación', 'error');
        return;
    }
    
    showContent('evaluationContent');
    goToSection('5-section');
    
    document.getElementById('totalScore').textContent = evaluation.scores.total;
    document.getElementById('jobLevel').textContent = evaluation.level.level;
    document.getElementById('levelDescription').textContent = evaluation.level.description;
    document.getElementById('jobDescriptionResult').textContent = evaluation.jobTitle;
    
    animateProgressCircle(evaluation.scores.total);
    document.getElementById('knowHowScore').textContent = `${evaluation.scores.knowHow} pts`;
    document.getElementById('problemSolvingScore').textContent = `${evaluation.scores.problemSolving} pts`;
    document.getElementById('responsibilityScore').textContent = `${evaluation.scores.responsibility} pts`;
    
    const profileType = determineProfileType(evaluation.scores.knowHow, evaluation.scores.problemSolving);
    const profileInfo = evaluationData.profileTypes[profileType];
    document.getElementById('profileType').textContent = profileInfo.name;
    document.getElementById('profileDescription').textContent = profileInfo.description;
    
    animateProgressBars({
        knowHow: evaluation.scores.knowHow,
        problemSolving: evaluation.scores.problemSolving,
        responsibility: evaluation.scores.responsibility
    });
    
    window.currentEvaluation = evaluation;
}

// Función para determinar el Perfil Corto
function determineProfileType(knowHowScore, problemSolvingScore) {
    const ratio = problemSolvingScore / knowHowScore;
    
    if (ratio > 0.87) return "P4";
    if (ratio > 0.76) return "P3";
    if (ratio > 0.66) return "P2";
    if (ratio > 0.57) return "P1";
    if (ratio >= 0.5 && ratio <= 0.57) return "LEVEL";
    if (ratio > 0.43) return "A1";
    if (ratio > 0.38) return "A2";
    if (ratio > 0.33) return "A3";
    return "A4";
}

// Función para cargar reportes
function loadReports() {
    const evaluations = JSON.parse(localStorage.getItem('jobEvaluations')) || [];
    
    if (evaluations.length === 0) {
        document.getElementById('reportsContainer').innerHTML = '<p>No hay suficientes datos para generar reportes.</p>';
        return;
    }
    
    const levelCounts = {};
    const scores = evaluations.map(e => e.scores.total);
    
    evaluationData.jobLevels.forEach(level => {
        levelCounts[level.level] = evaluations.filter(e => 
            e.scores.total >= level.min && e.scores.total <= level.max
        ).length;
    });
    
    createLevelDistributionChart(levelCounts);
    createScoreDistributionChart(scores);
}

// Función para crear gráfico de distribución por nivel
function createLevelDistributionChart(levelCounts) {
    const ctx = document.getElementById('levelDistributionChart').getContext('2d');
    
    if (window.evaluationCharts.levelDistribution) {
        window.evaluationCharts.levelDistribution.destroy();
    }
    
    const labels = Object.keys(levelCounts);
    const data = Object.values(levelCounts);
    const backgroundColors = [
        '#4361ee', '#3f37c9', '#4cc9f0', '#4895ef', '#560bad',
        '#b5179e', '#f72585', '#4caf50', '#ff9800', '#607d8b',
        '#9c27b0', '#2196f3', '#00bcd4', '#009688', '#8bc34a',
        '#ff5722', '#795548', '#9e9e9e', '#607d8b', '#3f51b5',
        '#673ab7', '#e91e63', '#00bcd4', '#009688', '#8bc34a'
    ];
    
    window.evaluationCharts.levelDistribution = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: backgroundColors,
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'right',
                },
                title: {
                    display: true,
                    text: 'Distribución por Nivel',
                    font: {
                        size: 16
                    }
                }
            }
        }
    });
}

// Función para crear gráfico de distribución de puntajes
function createScoreDistributionChart(scores) {
    const ctx = document.getElementById('scoreDistributionChart').getContext('2d');
    
    if (window.evaluationCharts.scoreDistribution) {
        window.evaluationCharts.scoreDistribution.destroy();
    }
    
    const ranges = [
        '0-200', '201-400', '401-600', '601-800', '801-1000', 
        '1001-1200', '1201-1400', '1401-1600', '1601-1800', '1801-2000',
        '2001-2200', '2201-2400', '2401-2600', '2601-2800', '2801-3000',
        '3001-3200', '3201-3400', '3401-3600'
    ];
    
    const counts = ranges.map(range => {
        const [min, max] = range.split('-').map(Number);
        return scores.filter(score => score >= min && score <= max).length;
    });
    
    window.evaluationCharts.scoreDistribution = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ranges,
            datasets: [{
                label: 'Número de Evaluaciones',
                data: counts,
                backgroundColor: '#4361ee',
                borderColor: '#3f37c9',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Número de Evaluaciones'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Rango de Puntajes'
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Distribución de Puntajes',
                    font: {
                        size: 16
                    }
                }
            }
        }
    });
}

// Función para calcular el puntaje de Know-How
function calculateKnowHowScore() {
    const technicalLevel = document.getElementById('technicalCompetence').value;
    const communicationLevel = document.getElementById('communicationLevel').value;
    const integrationScope = document.getElementById('integrationScope').value;
    
    if (!technicalLevel || !communicationLevel || !integrationScope) {
        showNotification('Por favor complete todos los campos de Know-How', 'error');
        return null;
    }
    
    const commIndex = evaluationData.knowHow.communication[communicationLevel];
    const intIndex = evaluationData.knowHow.integration[integrationScope];
    const techScores = evaluationData.knowHow.technical[technicalLevel];
    
    const totalIndex = commIndex + intIndex;
    const adjustedIndex = Math.min(totalIndex, techScores.length - 1);
    
    return techScores[adjustedIndex];
}

// Función para calcular el puntaje de Solución de Problemas
function calculateProblemSolvingScore(knowHowScore) {
    const complexityLevel = document.getElementById('problemComplexity').value;
    const thinkingFreedom = document.getElementById('thinkingFreedom').value;
    
    if (!complexityLevel || !thinkingFreedom || !knowHowScore) {
        showNotification('Por favor complete todos los campos de Solución de Problemas', 'error');
        return null;
    }
    
    const complexityFactors = evaluationData.problemSolving.complexity[complexityLevel];
    const freedomIndex = evaluationData.problemSolving.thinkingFreedom[thinkingFreedom];
    const adjustedIndex = Math.min(freedomIndex, complexityFactors.length - 1);
    
    const percentage = complexityFactors[adjustedIndex];
    return Math.round(knowHowScore * percentage * 100); // Multiplicar por 100 para escalar
}

// Función para calcular el puntaje de Responsabilidad
function calculateResponsibilityScore() {
    const freedomLevel = document.getElementById('actionFreedom').value;
    const impactNature = document.getElementById('impactNature').value;
    const magnitude = document.getElementById('impactMagnitude').value;
    
    if (!freedomLevel || !impactNature || !magnitude) {
        showNotification('Por favor complete todos los campos de Responsabilidad', 'error');
        return null;
    }
    
    const freedomScores = evaluationData.responsibility.freedom[freedomLevel];
    const natureIndex = evaluationData.responsibility.impactNature[impactNature];
    const magnitudeIndex = evaluationData.responsibility.magnitude[magnitude];
    
    const totalIndex = natureIndex + magnitudeIndex;
    const adjustedIndex = Math.min(totalIndex, freedomScores.length - 1);
    
    return freedomScores[adjustedIndex] * 3; // Ajustar el multiplicador según necesidad
}

// Función para determinar el nivel del puesto
function determineJobLevel(totalScore) {
    for (const level of evaluationData.jobLevels) {
        if (totalScore >= level.min && totalScore <= level.max) {
            return level;
        }
    }
    return { 
        level: "Nivel no determinado", 
        description: "El puntaje calculado está fuera de los rangos predefinidos. Considere ajustar los parámetros de evaluación." 
    };
}

// Función para animar el círculo de progreso
function animateProgressCircle(score) {
    const circle = document.querySelector('.progress-ring-circle');
    if (circle) {
        const radius = circle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        const maxScore = 3600; // Ajustado al nuevo máximo
        const offset = circumference - (score / maxScore) * circumference;
        
        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = circumference;
        
        setTimeout(() => {
            circle.style.strokeDashoffset = offset;
        }, 100);
    }
}

// Función para animar el conteo numérico
function animateNumberCounter(elementId, target) {
    const element = document.getElementById(elementId);
    if (element) {
        let current = 0;
        const duration = 1500;
        const increment = target / (duration / 16);
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                clearInterval(timer);
                current = target;
            }
            element.textContent = Math.floor(current);
        }, 16);
    }
}

// Función para animar las barras de progreso
function animateProgressBars(scores) {
    const bars = [
        { id: 'knowhow-bar', value: scores.knowHow / 1056 * 100 },
        { id: 'problemsolving-bar', value: scores.problemSolving / 1056 * 100 },
        { id: 'responsibility-bar', value: scores.responsibility / 3600 * 100 }
    ];
    
    bars.forEach((bar, index) => {
        setTimeout(() => {
            const barElement = document.getElementById(bar.id);
            if (barElement) {
                barElement.style.width = `${bar.value}%`;
            }
        }, 300 * (index + 1));
    });
}

// Función para guardar evaluaciones en LocalStorage
function saveEvaluationToLocal(data) {
    try {
        let evaluations = JSON.parse(localStorage.getItem('jobEvaluations')) || [];
        
        const profileType = determineProfileType(data.scores.knowHow, data.scores.problemSolving);
        const profileInfo = evaluationData.profileTypes[profileType];
        
        const evaluationWithMeta = {
            ...data,
            id: Date.now(),
            evaluationDate: new Date().toISOString(),
            profileType: profileType,
            profileName: profileInfo.name
        };
        
        evaluations.push(evaluationWithMeta);
        localStorage.setItem('jobEvaluations', JSON.stringify(evaluations));
        
        showNotification('Evaluación guardada correctamente', 'success');
        return true;
    } catch (error) {
        console.error('Error al guardar en LocalStorage:', error);
        showNotification('Error al guardar la evaluación', 'error');
        return false;
    }
}

// Función para exportar una evaluación guardada
function exportSavedEvaluation(id) {
    const evaluations = JSON.parse(localStorage.getItem('jobEvaluations')) || [];
    const evaluation = evaluations.find(e => e.id === id);
    
    if (!evaluation) {
        showNotification('No se encontró la evaluación', 'error');
        return;
    }
    
    exportEvaluation(evaluation);
}

// Función para exportar evaluación
function exportEvaluation(data, format = 'json') {
    try {
        let content, mimeType, extension;
        
        if (format === 'json') {
            content = JSON.stringify(data, null, 2);
            mimeType = 'application/json';
            extension = 'json';
        } else {
            // CSV por defecto
            const headers = ['Campo', 'Valor'];
            const profileType = determineProfileType(data.scores.knowHow, data.scores.problemSolving);
            const profileInfo = evaluationData.profileTypes[profileType];
            
            const rows = [
                ['Puesto', data.jobTitle],
                ['Descripción', data.jobDescription],
                ['Responsabilidades', data.jobResponsibilities],
                ['Puntaje Total', data.scores.total],
                ['Nivel', data.level.level],
                ['Perfil Corto', profileInfo.name],
                ['Know-How', data.scores.knowHow],
                ['Solución Problemas', data.scores.problemSolving],
                ['Responsabilidad', data.scores.responsibility],
                ['Fecha Evaluación', new Date(data.evaluationDate).toLocaleDateString()]
            ];
            
            content = [headers, ...rows].map(row => 
                row.map(field => `"${field.toString().replace(/"/g, '""')}"`).join(',')
            ).join('\n');
            
            mimeType = 'text/csv';
            extension = 'csv';
        }
        
        const blob = new Blob([content], { type: mimeType });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = `evaluacion_${data.jobTitle.replace(/\s+/g, '_')}_${new Date().toISOString().slice(0,10)}.${extension}`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        
        setTimeout(() => URL.revokeObjectURL(url), 100);
        
        return true;
    } catch (error) {
        console.error('Error al exportar evaluación:', error);
        showNotification('Error al exportar la evaluación', 'error');
        return false;
    }
}

// Función para generar PDF
function generatePDF() {
    if (!window.currentEvaluation) {
        showNotification('No hay evaluación para generar PDF', 'error');
        return;
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const evalData = window.currentEvaluation;
    const profileType = determineProfileType(evalData.scores.knowHow, evalData.scores.problemSolving);
    const profileInfo = evaluationData.profileTypes[profileType];
    const margin = 20;
    const pageWidth = doc.internal.pageSize.getWidth();
    const centerX = pageWidth / 2;

    // Configuración inicial
    doc.setFont('helvetica', 'normal');
    
    // Portada
    doc.setFontSize(24);
    doc.setTextColor(67, 97, 238);
    doc.text('Evaluación de Puesto', centerX, 30, { align: 'center' });
    
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text(`Puesto: ${evalData.jobTitle}`, margin, 50);
    doc.text(`Fecha: ${new Date(evalData.evaluationDate).toLocaleDateString()}`, margin, 60);
    
    // Resultados principales
    doc.setFontSize(14);
    doc.text(`Puntaje Total: ${evalData.scores.total}`, margin, 80);
    doc.text(`Nivel: ${evalData.level.level}`, margin, 90);
    doc.text(`Perfil: ${profileInfo.name}`, margin, 100);
    
    // Descripción del nivel
    doc.text('Descripción del Nivel:', margin, 115);
    doc.setFontSize(12);
    const descLines = doc.splitTextToSize(evalData.level.description, pageWidth - 2 * margin);
    doc.text(descLines, margin, 125);
    
    // Detalle de puntajes
    doc.addPage();
    doc.setFontSize(18);
    doc.setTextColor(67, 97, 238);
    doc.text('Detalle de Puntajes', margin, 20);
    
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    
    // Tabla de puntajes
    doc.autoTable({
        startY: 30,
        head: [['Factor', 'Puntaje']],
        body: [
            ['Know-How', evalData.scores.knowHow],
            ['Solución de Problemas', evalData.scores.problemSolving],
            ['Responsabilidad', evalData.scores.responsibility],
            ['Total', evalData.scores.total]
        ],
        headStyles: { 
            fillColor: [67, 97, 238],
            textColor: [255, 255, 255],
            fontStyle: 'bold'
        },
        alternateRowStyles: {
            fillColor: [240, 240, 240]
        },
        margin: { top: 30 }
    });
    
    // Descripción del puesto
    doc.addPage();
    doc.setFontSize(18);
    doc.setTextColor(67, 97, 238);
    doc.text('Descripción del Puesto', margin, 20);
    
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    const jobDescLines = doc.splitTextToSize(evalData.jobDescription || 'No especificado', pageWidth - 2 * margin);
    doc.text(jobDescLines, margin, 30);
    
    doc.setFontSize(14);
    doc.text('Responsabilidades:', margin, doc.previousAutoTable.finalY + 20);
    doc.setFontSize(12);
    const responsibilitiesLines = doc.splitTextToSize(evalData.jobResponsibilities || 'No especificado', pageWidth - 2 * margin);
    doc.text(responsibilitiesLines, margin, doc.previousAutoTable.finalY + 30);

    // Guardar PDF
    doc.save(`Evaluacion_${evalData.jobTitle.replace(/\s+/g, '_')}.pdf`);
    showNotification('PDF generado correctamente', 'success');
}

// Función principal de evaluación
function evaluateJob() {
    const jobTitle = document.getElementById('jobTitle').value;
    if (!jobTitle) {
        showNotification('Por favor ingrese el nombre del puesto', 'error');
        return;
    }

    const knowHowScore = calculateKnowHowScore();
    if (knowHowScore === null) return;
    
    const problemSolvingScore = calculateProblemSolvingScore(knowHowScore);
    if (problemSolvingScore === null) return;
    
    const responsibilityScore = calculateResponsibilityScore();
    if (responsibilityScore === null) return;
    
    const totalScore = knowHowScore + problemSolvingScore + responsibilityScore;
    const jobLevel = determineJobLevel(totalScore);
    const profileType = determineProfileType(knowHowScore, problemSolvingScore);
    const profileInfo = evaluationData.profileTypes[profileType];

    // Mostrar resultados
    document.getElementById('totalScore').textContent = totalScore;
    document.getElementById('jobLevel').textContent = jobLevel.level;
    document.getElementById('levelDescription').textContent = jobLevel.description;
    document.getElementById('jobDescriptionResult').textContent = jobTitle;
    
    document.getElementById('profileType').textContent = profileInfo.name;
    document.getElementById('profileDescription').textContent = profileInfo.description;
    document.getElementById('knowHowScore').textContent = `${knowHowScore} pts`;
    document.getElementById('problemSolvingScore').textContent = `${problemSolvingScore} pts`;
    document.getElementById('responsibilityScore').textContent = `${responsibilityScore} pts`;

    // Animaciones
    animateProgressCircle(totalScore);
    animateNumberCounter('totalScore', totalScore);
    animateProgressBars({
        knowHow: knowHowScore,
        problemSolving: problemSolvingScore,
        responsibility: responsibilityScore
    });

    // Guardar datos para exportar
    window.currentEvaluation = {
        jobTitle: jobTitle,
        jobDescription: document.getElementById('jobDescription').value,
        jobResponsibilities: document.getElementById('jobResponsibilities').value,
        evaluationDate: new Date().toISOString(),
        scores: {
            knowHow: knowHowScore,
            problemSolving: problemSolvingScore,
            responsibility: responsibilityScore,
            total: totalScore
        },
        level: jobLevel
    };

    // Ir a resultados
    goToSection('5-section');
}

// Función para resetear la evaluación
function resetEvaluation() {
    window.currentEvaluation = null;
    
    document.getElementById('jobTitle').value = '';
    document.getElementById('jobDescription').value = '';
    document.getElementById('jobResponsibilities').value = '';
    
    document.querySelectorAll('select').forEach(select => {
        select.selectedIndex = 0;
    });
    
    document.getElementById('totalScore').textContent = '0';
    document.getElementById('jobLevel').textContent = 'Nivel 0';
    document.getElementById('levelDescription').textContent = '';
    document.getElementById('jobDescriptionResult').textContent = '';
    document.getElementById('knowHowScore').textContent = '0 pts';
    document.getElementById('problemSolvingScore').textContent = '0 pts';
    document.getElementById('responsibilityScore').textContent = '0 pts';
    document.getElementById('profileType').textContent = 'Perfil no determinado';
    document.getElementById('profileDescription').textContent = 'No se ha determinado el perfil corto';
    
    document.querySelectorAll('.progress-fill').forEach(bar => {
        bar.style.width = '0%';
    });
    
    const circle = document.querySelector('.progress-ring-circle');
    if (circle) {
        const radius = circle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = circumference;
    }
    
    goToSection('1-section');
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        const preloader = document.querySelector('.preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }
    }, 1000);
    
    document.getElementById('homeLink')?.addEventListener('click', (e) => {
        e.preventDefault();
        showContent('evaluationContent');
    });
    
    document.getElementById('evaluationsLink')?.addEventListener('click', (e) => {
        e.preventDefault();
        showContent('evaluationsContent');
    });
    
    document.getElementById('reportsLink')?.addEventListener('click', (e) => {
        e.preventDefault();
        showContent('reportsContent');
    });
    
    document.getElementById('settingsLink')?.addEventListener('click', (e) => {
        e.preventDefault();
        showContent('settingsContent');
    });
    
    document.querySelectorAll('.step').forEach(step => {
        step.addEventListener('click', function() {
            const stepNumber = this.getAttribute('data-step');
            goToSection(`${stepNumber}-section`);
        });
    });
    
    document.getElementById('nextToKnowHow')?.addEventListener('click', (e) => {
        if (!validateSection('1-section')) {
            e.preventDefault();
            return;
        }
        goToSection('2-section');
    });
    
    document.getElementById('backToDescription')?.addEventListener('click', () => goToSection('1-section'));
    
    document.getElementById('nextToProblemSolving')?.addEventListener('click', (e) => {
        if (!validateSection('2-section')) {
            e.preventDefault();
            return;
        }
        goToSection('3-section');
    });
    
    document.getElementById('backToKnowHow')?.addEventListener('click', () => goToSection('2-section'));
    
    document.getElementById('nextToResponsibility')?.addEventListener('click', (e) => {
        if (!validateSection('3-section')) {
            e.preventDefault();
            return;
        }
        goToSection('4-section');
    });
    
    document.getElementById('backToProblemSolving')?.addEventListener('click', () => goToSection('3-section'));
    
    document.getElementById('evaluateBtn')?.addEventListener('click', function(e) {
        e.preventDefault();
        evaluateJob();
    });
    
    document.getElementById('saveBtn')?.addEventListener('click', function(e) {
        e.preventDefault();
        if (window.currentEvaluation) {
            const result = saveEvaluationToLocal(window.currentEvaluation);
            if (result) {
                showNotification('Evaluación guardada correctamente', 'success');
            }
        } else {
            showNotification('No hay evaluación para guardar', 'error');
        }
    });
    
    document.getElementById('exportBtn')?.addEventListener('click', function(e) {
        e.preventDefault();
        if (window.currentEvaluation) {
            exportEvaluation(window.currentEvaluation, 'json');
        } else {
            showNotification('No hay evaluación para exportar', 'error');
        }
    });
    
    document.getElementById('generatePdfBtn')?.addEventListener('click', function(e) {
        e.preventDefault();
        generatePDF();
    });
    
    document.getElementById('newEvalBtn')?.addEventListener('click', resetEvaluation);
    document.getElementById('newEvaluationBtn')?.addEventListener('click', resetEvaluation);
    
    showContent('evaluationContent');
    goToSection('1-section');
});