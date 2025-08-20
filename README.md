## React Hooks Playground 🚀

Dette prosjektet er laget som en øvelse i bruk av **React Hooks** (`useState` og `useEffect`). Formålet er å håndtere state, hente data fra API-er, og bygge interaktive grensesnitt med React.

Prosjektet består av tre komponenter:

### 1. CookieClicker 🍪
**Beskrivelse:** En enkel komponent hvor brukeren kan trykke på en "kjeks"-knapp for å samle poeng.  

**Funksjonalitet:**
- Klikk på kjeksen gir 1 poeng per klikk.
- Poengsummen vises i sanntid på skjermen.
- Bruker `useState` for å holde styr på poeng.

---

### 2. CatFacts 🐱
**Beskrivelse:** Henter og viser tilfeldige kattfakta fra et API.  

**Funksjonalitet:**
- Henter data fra [Cat Facts API](https://catfact.ninja/facts?limit=5) ved komponent-mount.
- Bruker `useEffect` for API-kall og `useState` for å håndtere:
  - `loading`: Vis "Loading..." mens data hentes.
  - `error`: Vis feilmelding hvis API-kall mislykkes.
  - `facts`: Viser kattfaktaene etter at data er hentet.
- Faktaene vises med `.map()` i en liste.

---

### 3. Users 👥
**Beskrivelse:** Viser en liste over brukere og gir mulighet til å legge til nye brukere.  

**Funksjonalitet:**
- Starter med en mock-data-liste over brukere.
- To input-felt for `username` og `email`.
- Knapp for å legge til ny bruker i listen.
- Bruker `useState` for å håndtere listen over brukere.
- Nye brukere vises i listen umiddelbart etter at de er lagt til.

**Mock-data:**
```javascript
const mockData = [
    { username: 'Ola Normann', email: 'ola.normann@norge.no'},
    { username: 'Torleif', email: 'torleif@kodehode.no' },
    { username: 'Jan Egil', email: 'jan.egil@kodehode.no' },
    { username: 'Sander', email: 'sander@kodehode.no' },
]
