const STORAGE_KEY = "lifeplus_sales_console_v42";
const API_URL = "./api.php";
const API_TOKEN = "pets2026_Xk7mQ9pZrT";

function createDefaultData() {
  return {
    updated_at: null,
    scripts: {
      suave: {
        title: "Llamada fria - version suave",
        content:
          "Hola, soy Peter de LifePlus Pets.\n\nTe llamo porque estamos hablando con clinicas y tiendas que trabajan con perros para compartir una nueva opcion de cuidado externo.\n\nQueria preguntar quien lleva este tipo de productos en el centro, o quien seria la persona adecuada para enviarle una ficha breve.\n\nEs Care & Comfort, un spray veterinario natural sin permetrina. Habla de pulgas, garrapatas, mosquitos, moscas y otros parasitos. Es una opcion mas suave para hogares y familias que muchas personas estan pidiendo ahora.",
      },
      directo: {
        title: "Llamada al decisor - version directa",
        content:
          "Hola, soy Peter de LifePlus Pets.\n\nEstoy llamando porque tenemos un spray externo para perros, Care & Comfort, y queria hablar con la persona que decide o recomienda productos en el centro.\n\nNo quiero quitarte tiempo. Solo queria saber si os encaja recibir una ficha breve con ingredientes, modo de uso y propuesta para clientes que buscan una rutina mas natural y sin permetrina.\n\nSi te interesa, te la envio por WhatsApp ahora mismo y me dices en dos minutos si merece la pena hablar mas adelante.",
      },
    },
    whatsapp: [
      {
        id: "ws-suave",
        title: "Contacto inicial - suave",
        text:
          "Hola, soy Peter de LifePlus Pets.\n\nTe escribo porque estamos compartiendo una nueva opcion de cuidado externo para perros: Care & Comfort.\n\nQuien seria la persona adecuada en vuestro centro para recibir una ficha breve con ingredientes y modo de uso?\n\nComo ventaja importante, no lleva permetrina y es un spray veterinario natural, facil de explicar a familias que buscan una rutina mas simple y segura.",
      },
      {
        id: "ws-seguimiento",
        title: "Mensaje de seguimiento",
        text:
          "Hola, retomo por aqui el mensaje de Care & Comfort por si se te paso.\n\nEs una ficha breve y sin compromiso. Si no es tu area, con que me digas quien lo lleva me vale. Un saludo!",
      },
      {
        id: "ws-tecnico",
        title: "Explicacion tecnica - quimicos vs natural",
        text:
          "Sobre tu duda de la eficacia frente a quimicos:\n\nCare & Comfort no busca sustituir el farmaco si hay riesgo alto, sino ser el refuerzo ideal:\n\n1. Barrera extra: capa natural para paseos sin anadir mas carga quimica.\n2. Efecto repelente: el limoncillo y la andiroba evitan que el insecto se acerque; la pastilla actua cuando ya ha picado.\n3. Seguridad: sin permetrina. Ideal si hay ninos o gatos en casa.\n\nEs la opcion profesional para el cliente que pide algo menos agresivo.",
      },
    ],
    emails: [
      {
        id: "email-clinica-pequena",
        title: "Clinica veterinaria pequena - propietario",
        text:
          "Asunto: Opcion natural sin permetrina para clientes que preguntan por cuidado externo\n\nHola [Nombre],\n\nSoy Peter de LifePlus Pets. Te escribo porque muchas clinicas pequenas estan recibiendo preguntas de familias que buscan rutinas mas naturales para el cuidado externo del perro, especialmente cuando el animal vive muy cerca de la familia dentro de casa.\n\nQueria presentarte Care & Comfort, un spray de uso externo solo para perros. La ficha oficial lo posiciona como una defensa externa natural y calmante frente a pulgas, garrapatas, mosquitos, moscas, acaros, piojos y otros parasitos externos. No contiene permetrina y sus ingredientes clave son aceite de lemongrass 4.0% y aceite de andiroba 1.0%, junto con canela, ricino, agua desionizada y tocoferoles mixtos.\n\nNo lo planteamos como sustituto de vuestro criterio veterinario ni de protocolos cuando hay riesgo clinico. Lo estamos trabajando como una opcion de rutina para clientes que quieren una alternativa sencilla, facil de explicar y con menor carga quimica percibida en el hogar.\n\nPuede encajar bien en familias que preguntan por productos sin permetrina, casas con ninos, convivencia con gatos o situaciones donde se prefiere ser especialmente cuidadoso con el contacto diario con el pelaje del perro. En hogares con embarazo, por ejemplo, el mensaje debe ser prudente: no prometer proteccion medica, sino ofrecer una conversacion mas tranquila sobre reducir exposiciones innecesarias cuando el cliente lo pide.\n\nSi te parece util, te envio la ficha breve con modo de uso y vemos si tiene sentido para vuestra clinica.\n\nUn saludo,\nPeter\nLifePlus Pets\n\nFollow-up:\nHola [Nombre], retomo el email de Care & Comfort. Si no eres la persona que revisa productos externos para perros, dime quien lo lleva y le envio la ficha directamente. Gracias.",
      },
      {
        id: "email-director-clinico",
        title: "Director clinico - enfoque tecnico prudente",
        text:
          "Asunto: Care & Comfort: spray externo para perros, sin permetrina, para conversaciones de rutina\n\nHola Dr./Dra. [Apellido],\n\nSoy Peter de LifePlus Pets. Contacto contigo porque estamos presentando Care & Comfort a centros veterinarios que quieren tener una respuesta clara para clientes que preguntan por alternativas mas naturales en cuidado externo del perro.\n\nCare & Comfort es un spray de uso externo solo para perros. Segun la ficha de producto, combina aceites naturales para apoyar una barrera calmante frente a parasitos externos comunes. Ingredientes activos: lemongrass oil 4.0%, cinnamon oil 1.0%, andiroba oil 1.0% y castor oil 0.5%. No contiene permetrina. El uso indicado es agitar, rociar sobre el pelaje y evitar nariz, boca y ojos. Puede emplearse a diario.\n\nLa propuesta para clinica es sencilla: no competir con el protocolo veterinario cuando el animal necesita un antiparasitario farmacologico, sino ofrecer una herramienta de rutina para propietarios que piden un enfoque mas suave, con ingredientes visibles y explicacion facil.\n\nEl punto diferencial que mejor funciona es la conversacion de hogar: perros que suben al sofa, duermen cerca de la familia o conviven con personas que prefieren reducir contacto innecesario con sustancias quimicas. En el caso de embarazo o hogares especialmente sensibles, la comunicacion debe mantenerse prudente y sin afirmaciones definitivas: simplemente es una opcion sin permetrina para familias que preguntan por esa preferencia.\n\nSi te encaja, puedo enviarte ficha tecnica resumida y una propuesta de como explicarlo al equipo sin cruzar claims medicos.\n\nGracias,\nPeter\nLifePlus Pets\n\nFollow-up:\nHola Dr./Dra. [Apellido], te reenvio por si se quedo abajo. La idea no es sustituir protocolos, sino valorar si Care & Comfort puede ser una opcion complementaria de rutina para clientes que piden productos sin permetrina.",
      },
      {
        id: "email-central-madrid",
        title: "Central o grupo en Madrid - compras",
        text:
          "Asunto: Propuesta para central: Care & Comfort, rutina externa sin permetrina para perros\n\nHola [Nombre],\n\nSoy Peter de LifePlus Pets. Me gustaria haceros llegar una propuesta breve para valorar Care & Comfort dentro de vuestra central o red de clinicas en Madrid.\n\nEl producto es un spray de uso externo solo para perros, formulado con aceites naturales. La ficha oficial destaca defensa externa natural y calmante frente a pulgas, garrapatas, mosquitos, moscas, acaros, piojos y otros parasitos externos. No contiene permetrina. Ingredientes activos principales: lemongrass oil 4.0% y andiroba oil 1.0%.\n\nPara una central, el valor no es solo el producto, sino la consistencia del discurso:\n\n1. Mensaje claro para equipos: no sustituye el criterio veterinario ni protocolos de alto riesgo.\n2. Diferencial comercial: sin permetrina, ingredientes visibles y aplicacion sencilla.\n3. Perfil de cliente: propietarios que buscan rutinas mas naturales, hogares con ninos, convivencia con gatos o familias que quieren reducir exposicion innecesaria en contacto diario con el perro.\n4. Comunicacion prudente: en embarazo u hogares sensibles, hablar de preferencia y cuidado en la rutina, no de garantias medicas.\n\nSi tiene sentido, puedo enviar una ficha de evaluacion para vuestro equipo o coordinar una llamada corta de 15 minutos para revisar encaje, modo de uso, materiales para clinica y modelo comercial.\n\nUn saludo,\nPeter\nLifePlus Pets\n\nFollow-up:\nHola [Nombre], retomo la propuesta de Care & Comfort para la central. Si compras no es el departamento correcto, te agradezco que me indiques si debe verlo direccion clinica, marketing o retail.",
      },
      {
        id: "email-practice-manager",
        title: "Practice manager o recepcion - pedir contacto",
        text:
          "Asunto: A quien enviar ficha de Care & Comfort para perros?\n\nHola,\n\nSoy Peter de LifePlus Pets. Os escribo porque queremos enviar una ficha breve de Care & Comfort, un spray externo solo para perros, sin permetrina y con aceites naturales como lemongrass 4.0% y andiroba 1.0%.\n\nNo quiero ocuparos tiempo si no sois la persona adecuada. Busco a quien revise productos recomendables o complementarios para clientes que preguntan por cuidado externo del perro, especialmente familias que prefieren rutinas mas naturales y faciles de explicar.\n\nLa ficha incluye ingredientes, modo de uso y el enfoque correcto: no sustituir protocolos veterinarios, sino ofrecer una opcion de rutina para clientes que piden alternativas sin permetrina.\n\nQuien seria la persona adecuada para enviarsela?\n\nGracias,\nPeter\nLifePlus Pets\n\nFollow-up:\nHola, solo retomo este mensaje para saber si puedo enviar la ficha a la persona que lleva productos externos para perros. Si no encaja, con que me lo digais lo dejo anotado.",
      },
      {
        id: "email-integrativa-familiar",
        title: "Clinica integrativa o familiar",
        text:
          "Asunto: Care & Comfort para familias que piden rutinas mas naturales para su perro\n\nHola [Nombre],\n\nSoy Peter de LifePlus Pets. Por el tipo de enfoque de vuestra clinica, creo que Care & Comfort podria encajar como producto de conversacion para clientes que preguntan por cuidado externo mas natural para perros.\n\nEs un spray de uso externo solo para perros, sin permetrina, con aceites naturales. La ficha oficial destaca lemongrass oil 4.0% y andiroba oil 1.0%, junto con canela, ricino, agua desionizada y tocoferoles mixtos. Se aplica sobre el pelaje evitando ojos, nariz y boca, y puede emplearse a diario.\n\nDonde mejor encaja no es en una promesa agresiva, sino en una rutina: paseo, cepillado, pelaje, cama y convivencia dentro de casa. Para muchas familias, el perro esta muy cerca de ninos, sofa, cama o personas que prefieren reducir cargas quimicas innecesarias. En hogares con embarazo, la forma correcta de explicarlo es sutil y responsable: no como garantia de salud humana, sino como una opcion sin permetrina para quienes buscan una rutina mas cuidadosa.\n\nSi quieres, te envio la ficha y un pequeno guion para explicarlo sin alarmismo y sin contradecir recomendaciones veterinarias.\n\nUn saludo,\nPeter\nLifePlus Pets\n\nFollow-up:\nHola [Nombre], te escribo de nuevo por Care & Comfort. Creo que puede encajar especialmente en clientes que ya preguntan por alternativas naturales. Te puedo pasar ficha y texto breve para equipo.",
      },
      {
        id: "email-interes-previo",
        title: "Contacto ya interesado - envio de ficha",
        text:
          "Asunto: Ficha Care & Comfort - spray externo para perros sin permetrina\n\nHola [Nombre],\n\nGracias por el interes. Te dejo un resumen practico de Care & Comfort para que puedas valorarlo rapidamente:\n\nProducto: LifePlus Pets Care & Comfort\nUso: spray externo solo para perros\nPosicionamiento: defensa externa natural y calmante\nSin permetrina\nIngredientes activos: lemongrass oil 4.0%, cinnamon oil 1.0%, andiroba oil 1.0%, castor oil 0.5%\nModo de uso: agitar, rociar sobre el pelaje y evitar nariz, boca y ojos. Puede emplearse a diario.\n\nEl enfoque comercial que estamos usando con clinicas es prudente: Care & Comfort no sustituye el criterio veterinario ni protocolos antiparasitarios cuando el riesgo lo exige. Encaja como opcion de rutina para propietarios que buscan ingredientes naturales, una aplicacion sencilla y una conversacion mas tranquila sobre el contacto diario del perro con el hogar.\n\nEl argumento sin permetrina suele interesar en hogares con ninos, convivencia con gatos o familias con especial sensibilidad a la exposicion quimica. Si aparece el tema embarazo, lo tratamos con cuidado: como preferencia de reducir exposiciones innecesarias, no como afirmacion medica.\n\nTe adjunto/paso la ficha y, si quieres, vemos en una llamada corta si tiene sentido para vuestro centro.\n\nUn saludo,\nPeter\nLifePlus Pets\n\nFollow-up:\nHola [Nombre], pudiste revisar la ficha? Si quieres, te resumo en 3 puntos como lo estan presentando otros centros: sin permetrina, rutina externa sencilla y discurso prudente para familias sensibles.",
      },
    ],
    objeciones: [
      {
        id: "obj-1",
        label: "Repelencia vs accion",
        text: "La quimica actua cuando pican. Nosotros ayudamos a evitar que se acerquen gracias a Andiroba y Limoncillo.",
      },
      {
        id: "obj-2",
        label: "Hogares con gatos y ninos",
        text: "No lleva permetrina, lo que facilita explicarlo en hogares donde se busca reducir riesgos y simplificar la rutina externa del perro.",
      },
      {
        id: "obj-3",
        label: "Refuerzo de paseo",
        text: "No sustituye la recomendacion veterinaria en casos de riesgo alto. Suma una barrera natural para paseos y temporadas de mayor exposicion.",
      },
    ],
    productos: [
      {
        name: "Care & Comfort",
        promise: "Defensa externa natural. Sin permetrina.",
        ingredient: "Lemongrass 4.0% + Andiroba",
        use: "Rociar sobre el pelaje, evitando ojos, nariz y boca.",
      },
      {
        name: "Ahiflower Oil",
        promise: "Omega 3 y 6 vegetal para piel, pelo y bienestar.",
        ingredient: "Ahiflower, fuente vegetal de SDA",
        use: "Dosificar segun peso y rutina recomendada.",
      },
      {
        name: "Move",
        promise: "Apoyo articular para perros activos o senior.",
        ingredient: "Glucosamina + MSM",
        use: "Presentar cuando hablan de movilidad o edad.",
      },
      {
        name: "Digest",
        promise: "Apoyo digestivo y equilibrio intestinal.",
        ingredient: "Calostro + prebioticos",
        use: "Presentar ante sensibilidad digestiva o cambios de dieta.",
      },
    ],
  };
}

let data = loadLocalData();
let editing = null;
let syncState = "local";

function cloneData(value) {
  return JSON.parse(JSON.stringify(value));
}

function loadLocalData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : null;
    return normalizeData(parsed || createDefaultData());
  } catch {
    return normalizeData(createDefaultData());
  }
}

function saveLocalData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function normalizeData(value) {
  const base = createDefaultData();
  const source = value && typeof value === "object" ? value : {};
  const normalized = {
    ...base,
    ...source,
    updated_at: source.updated_at || null,
    scripts: {
      ...base.scripts,
      ...(source.scripts || {}),
    },
    whatsapp: Array.isArray(source.whatsapp) ? source.whatsapp : base.whatsapp,
    emails: Array.isArray(source.emails) ? source.emails : base.emails,
    objeciones: Array.isArray(source.objeciones) ? source.objeciones : base.objeciones,
    productos: Array.isArray(source.productos) ? source.productos : base.productos,
  };

  return normalized;
}

function currentStamp() {
  return new Date().toISOString();
}

function markDirty() {
  data.updated_at = currentStamp();
}

function saveData() {
  markDirty();
  saveLocalData();
  void saveRemoteData();
  updateSyncStatus();
}

async function loadRemoteData() {
  const response = await fetch(API_URL, {
    cache: "no-store",
    headers: { "X-CRM-Token": API_TOKEN },
  });

  if (!response.ok) throw new Error(`HTTP ${response.status}`);

  const payload = await response.json();
  if (!payload?.ok || typeof payload.data !== "object") {
    throw new Error("Respuesta invalida del servidor");
  }

  return normalizeData(payload.data);
}

async function saveRemoteData() {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CRM-Token": API_TOKEN,
      },
      body: JSON.stringify({ data }),
    });

    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const payload = await response.json();
    if (!payload?.ok) throw new Error(payload?.error || "Error guardando");

    syncState = "online";
    updateSyncStatus();
  } catch (error) {
    syncState = "local";
    updateSyncStatus();
    console.warn("No se pudo guardar en servidor:", error);
  }
}

function compareStamps(left, right) {
  return new Date(left || 0).getTime() - new Date(right || 0).getTime();
}

async function hydrateData() {
  try {
    const remote = await loadRemoteData();
    const local = loadLocalData();
    data = compareStamps(local.updated_at, remote.updated_at) >= 0 ? local : remote;

    if (compareStamps(local.updated_at, remote.updated_at) > 0) {
      syncState = "online";
      saveLocalData();
      await saveRemoteData();
    } else {
      syncState = "online";
      saveLocalData();
    }
  } catch (error) {
    console.warn("No se pudo cargar del servidor, uso almacenamiento local:", error);
    syncState = location.protocol === "file:" ? "local" : "online";
  }

  updateSyncStatus();
  renderAll();
}

function updateSyncStatus() {
  const el = document.getElementById("syncStatus");
  if (!el) return;

  if (syncState === "online") {
    el.textContent = "Sincronizacion online";
    el.classList.remove("is-local");
    el.classList.add("is-online");
  } else {
    el.textContent = "Sincronizacion local";
    el.classList.remove("is-online");
    el.classList.add("is-local");
  }
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2200);
}

function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text);
  }

  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.opacity = "0";
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  textArea.remove();
  return Promise.resolve();
}

function cardTemplate({ id, title, text, category }) {
  const isEditing = editing === id;
  return `
    <article class="script-card">
      <div class="script-top">
        <h3 class="script-title">${escapeHtml(title)}</h3>
        <div class="tools">
          <button class="tool-btn" data-action="edit" data-category="${category}" data-id="${id}" type="button">${isEditing ? "Cerrar" : "Editar"}</button>
          <button class="tool-btn copy-btn" data-action="copy" data-category="${category}" data-id="${id}" type="button">Copiar</button>
        </div>
      </div>
      <div class="script-body">
        ${
          isEditing
            ? `<div class="editor">
                <textarea data-editor="${id}">${escapeHtml(text)}</textarea>
                <button class="save-btn" data-action="save" data-category="${category}" data-id="${id}" type="button">Guardar cambios</button>
              </div>`
            : `<p class="script-text">${escapeHtml(text)}</p>`
        }
      </div>
    </article>
  `;
}

function getItem(category, id) {
  if (category === "scripts") return data.scripts[id];
  return data[category].find((item) => item.id === id);
}

function getText(category, id) {
  const item = getItem(category, id);
  return category === "scripts" ? item.content : item.text;
}

function setText(category, id, value) {
  if (category === "scripts") {
    data.scripts[id].content = value;
    return;
  }
  getItem(category, id).text = value;
}

function renderScripts() {
  document.getElementById("scriptsList").innerHTML = Object.entries(data.scripts)
    .map(([id, item]) =>
      cardTemplate({
        id,
        title: item.title,
        text: item.content,
        category: "scripts",
      }),
    )
    .join("");
}

function renderWhatsApp() {
  document.getElementById("whatsappList").innerHTML = data.whatsapp
    .map((item) =>
      cardTemplate({
        id: item.id,
        title: item.title,
        text: item.text,
        category: "whatsapp",
      }),
    )
    .join("");
}

function renderEmails() {
  document.getElementById("emailsList").innerHTML = data.emails
    .map((item) =>
      cardTemplate({
        id: item.id,
        title: item.title,
        text: item.text,
        category: "emails",
      }),
    )
    .join("");
}

function renderObjections() {
  document.getElementById("objectionsList").innerHTML = data.objeciones
    .map((item) =>
      cardTemplate({
        id: item.id,
        title: item.label,
        text: item.text,
        category: "objeciones",
      }),
    )
    .join("");
}

function renderProducts() {
  document.getElementById("productsList").innerHTML = data.productos
    .map(
      (product) => `
        <article class="product-card">
          <div>
            <h3>${escapeHtml(product.name)}</h3>
            <p>${escapeHtml(product.promise)}</p>
          </div>
          <div class="product-meta">
            <span>Ingrediente clave: ${escapeHtml(product.ingredient)}</span>
            <span>Uso: ${escapeHtml(product.use)}</span>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderAll() {
  renderScripts();
  renderWhatsApp();
  renderEmails();
  renderObjections();
  renderProducts();
}

document.querySelector(".tabs-inner").addEventListener("click", (event) => {
  const tab = event.target.closest("[data-tab]");
  if (!tab) return;

  document.querySelectorAll("[data-tab]").forEach((item) => {
    item.classList.toggle("is-active", item === tab);
  });
  document.querySelectorAll("[data-panel]").forEach((panel) => {
    panel.classList.toggle("is-active", panel.dataset.panel === tab.dataset.tab);
  });
  editing = null;
  renderAll();
});

document.body.addEventListener("click", (event) => {
  const button = event.target.closest("[data-action]");
  if (!button) return;

  const { action, category, id } = button.dataset;

  if (action === "edit") {
    editing = editing === id ? null : id;
    renderAll();
  }

  if (action === "copy") {
    copyText(getText(category, id)).then(() => showToast("Texto copiado"));
  }

  if (action === "save") {
    const textarea = document.querySelector(`[data-editor="${CSS.escape(id)}"]`);
    setText(category, id, textarea.value.trim());
    saveData();
    editing = null;
    renderAll();
    showToast("Cambios guardados");
  }
});

document.getElementById("resetDataBtn").addEventListener("click", () => {
  if (!window.confirm("Quieres resetear todos los cambios guardados?")) return;
  data = normalizeData(cloneData(createDefaultData()));
  saveData();
  editing = null;
  renderAll();
  showToast("Datos restaurados");
});

updateSyncStatus();
renderAll();
void hydrateData();
