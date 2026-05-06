(function () {
  const script = document.currentScript;
  const codeList = ((script && script.dataset.code) || "")
    .split(/[,|]/)
    .map((value) => String(value).trim())
    .filter(Boolean);
  const title = (script && script.dataset.title) || "Acceso privado";
  const subtitle =
    (script && script.dataset.subtitle) ||
    "Introduce el codigo de acceso para continuar.";
  const storageKey =
    "lifeplus_access_" +
    (script && script.dataset.key ? script.dataset.key : location.pathname);

  if (!codeList.length) return;

  const style = document.createElement("style");
  style.textContent = `
    .access-locked body > :not(.access-gate) { display: none !important; }
    .access-gate {
      min-height: 100vh;
      display: grid;
      place-items: center;
      padding: 24px;
      background:
        radial-gradient(circle at 20% 18%, rgba(217, 95, 135, 0.18), transparent 32%),
        radial-gradient(circle at 78% 12%, rgba(155, 207, 60, 0.18), transparent 28%),
        linear-gradient(135deg, #102a27 0%, #114b46 48%, #2f4f4a 100%);
      color: #102a27;
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    }
    .access-gate__panel {
      width: min(100%, 420px);
      background: rgba(255, 255, 255, 0.96);
      border: 1px solid rgba(255, 255, 255, 0.6);
      border-radius: 18px;
      box-shadow: 0 24px 80px rgba(0, 0, 0, 0.28);
      padding: 28px;
    }
    .access-gate__eyebrow {
      margin: 0 0 8px;
      color: #2f7a72;
      font-size: 12px;
      font-weight: 800;
      letter-spacing: 0.16em;
      text-transform: uppercase;
    }
    .access-gate__title {
      margin: 0;
      color: #102a27;
      font-size: clamp(28px, 7vw, 40px);
      line-height: 1;
      letter-spacing: -0.04em;
    }
    .access-gate__subtitle {
      margin: 12px 0 20px;
      color: #4b615e;
      line-height: 1.5;
    }
    .access-gate__form {
      display: grid;
      gap: 12px;
    }
    .access-gate__input {
      width: 100%;
      border: 1px solid #cbd7d2;
      border-radius: 12px;
      padding: 14px 16px;
      color: #102a27;
      font: inherit;
      font-size: 20px;
      letter-spacing: 0.18em;
      text-align: center;
      outline: none;
    }
    .access-gate__input:focus {
      border-color: #2f7a72;
      box-shadow: 0 0 0 4px rgba(47, 122, 114, 0.14);
    }
    .access-gate__button {
      border: 0;
      border-radius: 12px;
      padding: 14px 16px;
      background: #114b46;
      color: white;
      cursor: pointer;
      font: inherit;
      font-weight: 800;
    }
    .access-gate__error {
      min-height: 20px;
      margin: 0;
      color: #b42342;
      font-size: 14px;
      font-weight: 700;
      text-align: center;
    }
  `;
  document.head.appendChild(style);

  if (sessionStorage.getItem(storageKey) === "ok") return;

  document.documentElement.classList.add("access-locked");

  function normalize(value) {
    return String(value || "").replace(/\D/g, "");
  }

  function unlock() {
    sessionStorage.setItem(storageKey, "ok");
    document.documentElement.classList.remove("access-locked");
    const gate = document.querySelector(".access-gate");
    if (gate) gate.remove();
  }

  function renderGate() {
    const gate = document.createElement("div");
    gate.className = "access-gate";
    gate.innerHTML = `
      <section class="access-gate__panel" aria-labelledby="accessGateTitle">
        <p class="access-gate__eyebrow">LifePlus Pets</p>
        <h1 class="access-gate__title" id="accessGateTitle">${title}</h1>
        <p class="access-gate__subtitle">${subtitle}</p>
        <form class="access-gate__form">
          <input class="access-gate__input" inputmode="numeric" autocomplete="one-time-code" aria-label="Codigo de acceso" placeholder="Codigo" />
          <button class="access-gate__button" type="submit">Entrar</button>
          <p class="access-gate__error" role="alert"></p>
        </form>
      </section>
    `;

    const form = gate.querySelector("form");
    const input = gate.querySelector("input");
    const error = gate.querySelector(".access-gate__error");

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const entered = normalize(input.value);
      if (codeList.some((candidate) => normalize(candidate) === entered)) {
        unlock();
        return;
      }
      error.textContent = "Codigo incorrecto.";
      input.select();
    });

    document.body.prepend(gate);
    input.focus();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderGate);
  } else {
    renderGate();
  }
})();
