# Projektdokumentation - MacroMate

## Inhaltsverzeichnis

1. [Ausgangslage](#1-ausgangslage)
2. [Lösungsidee](#2-lösungsidee)
3. [Vorgehen & Artefakte](#3-vorgehen--artefakte)
   1. [Understand & Define](#31-understand--define)
   2. [Sketch](#32-sketch)
   3. [Decide](#33-decide)
   4. [Prototype](#34-prototype)
   5. [Validate](#35-validate)
4. [Erweiterungen [Optional]](#4-erweiterungen-optional)
5. [Projektorganisation [Optional]](#5-projektorganisation-optional)
6. [KI-Deklaration](#6-ki-deklaration)
7. [Anhang [Optional]](#7-anhang-optional)

> **Hinweis:** Massgeblich sind die im **Unterricht** und auf **Moodle** kommunizierten Anforderungen.

<!-- WICHTIG: DIE KAPITELSTRUKTUR DARF NICHT VERÄNDERT WERDEN! -->

<!-- Diese Vorlage ist für eine README.md im Repository gedacht. Abschnitte mit [Optional] können weggelassen werden, wenn in den Übungen nichts anderes verlangt wird. -->

## 1. Ausgangslage

Kurz beschreiben, welches Problem adressiert wird und welches Ergebnis angestrebt ist.
Wem nützt die Lösung, wer ist beteiligt oder betroffen?

- **Problem:** Viele Menschen, die ihre Ernährung verbessern oder ein bestimmtes
  Körpergewicht erreichen möchten, haben keine einfache und übersichtliche Möglichkeit,
  ihre tägliche Makronährstoffaufnahme (Proteine, Kohlenhydrate, Fette) zu verfolgen.
  Bestehende Lösungen sind entweder zu komplex, kostenpflichtig oder bieten keine
  integrierte Übersicht über Kalorien, Makros und Rezepte in einer einzigen Anwendung.
  _(Beispiel: Ein Student, der Muskeln aufbauen möchte, weiss nicht, ob er täglich genug
  Protein zu sich nimmt, ohne mühsames Rechnen in Excel oder teure Premium-Apps.)_

- **Ziele:**
  - Kostenlose Webapplikation zur täglichen Erfassung von Mahlzeiten und Makronährstoffen
  - Integrierter Kalorienrechner zur Berechnung des individuellen Tagesbedarfs
  - Lebensmitteldatenbank mit Makroangaben pro 100g / Portion
  - Gesunde Rezepte mit vollständigen Nährwertangaben
  - Einfache Benutzerregistrierung und persönliches Konto

- **Primäre Zielgruppe:** Gesundheits- und fitnessbewusste Personen im Alter von 18–45
  Jahren, die ihre Ernährung gezielt steuern möchten, sei es zum Abnehmen, Muskelaufbau
  oder zur allgemeinen Gesundheitsverbesserung. Vorkenntnisse in Ernährungswissenschaften
  werden nicht vorausgesetzt.

- **Weitere Stakeholder:**
  - _Ernährungsberater (zukünftig):_ Könnten die Plattform zur Begleitung von Klienten nutzen
  - _Fitnessstudios / Trainer (zukünftig):_ Potenzielle Partner für Weiterempfehlungen

## 2. Lösungsidee

MacroMate ist eine kostenlose, webbasierte Applikation, die Nutzern ermöglicht,
ihre tägliche Ernährung einfach und übersichtlich zu verfolgen, ohne Installation,
ohne Abonnement und ohne Vorkenntnisse in Ernährungswissenschaften.

- **Kernfunktionalität:**
  - _Daily Tracking:_ Nutzer erfassen täglich ihre Mahlzeiten und sehen sofort,
    wie viel Kalorien, Protein, Kohlenhydrate und Fett sie bereits konsumiert haben,
    visualisiert über Fortschrittsbalken pro Makronährstoff.
  - _Calorie Calculator:_ Basierend auf Alter, Geschlecht, Gewicht, Grösse und
    Aktivitätslevel wird der individuelle Tageskalorienbedarf berechnet
    und als persönliches Ziel gespeichert.
  - _Food Macros:_ Eine durchsuchbare Lebensmitteldatenbank liefert die
    Makronährstoffwerte pro 100g oder Portion für eine grosse Auswahl an
    Lebensmitteln.
  - _Recipes:_ Gesunde Rezepte werden mit vollständigen Nährwertangaben pro
    Portion angezeigt, sodass Nutzer diese direkt in ihr Daily Tracking
    übernehmen können.
  - _Login / Register:_ Nutzer erstellen ein persönliches Konto, um ihre
    Daten geräteübergreifend zu speichern und ihren Fortschritt über Zeit
    zu verfolgen.

- **Annahmen:**
  - Nutzer sind bereit, ihre Mahlzeiten täglich manuell einzutragen, wenn
    der Aufwand gering und die Oberfläche intuitiv ist
  - Eine übersichtliche Visualisierung der drei Hauptmakros (Protein,
    Kohlenhydrate, Fett) reicht als tägliche Rückmeldung aus
  - Eine lokale Lebensmitteldatenbank deckt die häufigsten Alltagslebensmittel
    ausreichend ab

- **Abgrenzung:**
  - Keine Integration mit Fitness-Trackern oder Wearables (z. B. Apple Watch,
    Fitbit) im aktuellen Umfang
  - Kein Barcode-Scanner zur automatischen Lebensmittelerkennung
  - Keine medizinische oder klinische Ernährungsberatung, MacroMate ersetzt
    keinen Ernährungsberater
  - Keine mobile App (iOS/Android), reine Webapplikation

## 3. Vorgehen & Artefakte

Die Durchführung erfolgt phasenbasiert; dokumentieren Sie die wichtigsten Ergebnisse je Phase.

### 3.1 Understand & Define

- **Zielgruppenverständnis:** _[Problemraumanalyse, Recherche, (Proto-)Personas]_
- **Wesentliche Erkenntnisse:** _[Stichpunkte]_

### 3.2 Sketch

- **Variantenüberblick:** _[kurz]_
- **Skizzen:** _[Mehrere Varianten; Unterschiede kurz dokumentieren.]_

### 3.3 Decide

- **Gewählte Variante & Begründung:** _[Entscheidkriterien nennen]_
- **End-to-End-Ablauf:** _[Beschreibung inkl. User Journey Map]_
- **Mockup:** Link to the figma mockup website: https://www.figma.com/design/tlhBCLcc3ESERBE1mSrfmt/MacroMate-Website?nodeid=1-2&t=Y48VTyom4s17t9Ot-1

### 3.4 Prototype

#### 3.4.1. Entwurf (Design)

Beschreibt die Gestaltung und Interaktion.

> **Hinweis:** Hier wird der **Prototyp** beschrieben, nicht das **Mockup**.

- **Informationsarchitektur:** _[z. B. Seiten/Navigation: Konzept, nicht die technische Umsetzung]_
- **User Interface Design:** _[wichtige Screens: Screenshots mit kurzen Erläuterungen]_
- **Designentscheidungen:** _[zentrale Entscheidungen und Begründungen]_

#### 3.4.2. Umsetzung (Technik)

Fasst die technische Realisierung zusammen.

- **Technologie-Stack:** _[SvelteKit, Bibliotheken falls genutzt]_
- **Tooling:** _[IDE/Erweiterungen, lokale/Cloud-Tools; den Einsatz von KI beschreiben Sie im Kapitel **KI-Deklaration**]_
- **Struktur & Komponenten:** _[Seiten, Routen, State/Stores, wichtige Komponenten]_
- **Daten & Schnittstellen:** _[Wie werden Daten gespeichert, verwaltet, abgerufen?]_
- **Deployment:** _[URL]_
- **Besondere Entscheidungen:** _[z. B. Trade-offs, Vereinfachungen]_

### 3.5 Validate

- **URL der getesteten Version** (separat deployt)
- **Ziele der Prüfung:** _[welche Fragen sollen beantwortet werden?]_
- **Vorgehen:** _[moderiert/unmoderiert; remote/on-site]_
- **Stichprobe:** _[Mit wem wurde getestet? Profil; Anzahl]_
- **Aufgaben/Szenarien:** _[Ausformulierte Testaufgaben]_
- **Kennzahlen & Beobachtungen:** _[z. B. Erfolgsquote, Zeitbedarf, qualitative Findings]_
- **Zusammenfassung der Resultate:** _[Wichtigste Erkenntnisse; 2-4 Sätze]_
- **Abgeleitete Verbesserungen:** _[Anforderungen, die als nächstes umgesetzt werden sollten, priorisiert, kurz begründet; falls Verbesserungen im Prototyp konkret umgesetzt wurden: In Kap. 4 dokumentieren]_

## 4. Erweiterungen [Optional]

Dokumentiert Erweiterungen über den Mindestumfang hinaus.

> **Hinweis:** Jede Erweiterung ist separat nach dem folgenden Schema zu beschreiben.

### _[4.x Kurzbeschreibung / Titel]_

- **Beschreibung & Nutzen:** _[Was wurde erweitert? Warum?]_
- **Wo umgesetzt:** _[Wie und wo wurde es gemacht? Frontend, Backend, Datenbank?]_
- **Referenz:** _[Wo wird die Erweiterung auch noch beschrieben, z.B. Screenshot oder Beschreibung in einem anderen Kapitel]_
- **Aus Evaluation abgeleitet?:** _[Wurde diese Erweiterung als Folge eines in der Evaluation identifizierten Issues implementiert?]_

> Das folgende **Beispiel** wurde bewusst kurz gehalten. Erweiterungen dürfen auch ausführlicher beschrieben werden.

### 4.1 Tabelle nach Kategorien filtern

- **Beschreibung & Nutzen:** Tabelle X kann nach Kategorie gefiltert werden, weil User typischerweise nur an einer bestimmten Kategorie interessiert sind.
- **Wo umgesetzt:**
  - **Frontend:** Tabelle mit Dropdown in Datei ...
  - **Backend:** Form Action ... in Datei ...
  - **Datenbank:** MongoDB-Query in Datei ...
- **Referenz:** Screenshot in Kap. x.y
- **Aus Evaluation abgeleitet?:** Ja, Issue x.y

## 5. Projektorganisation [Optional]

Beispiele:

- **Repository & Struktur:** _[Link; kurze Strukturübersicht]_
- **Issue-Management:** _[Vorgehen kurz beschreiben]_
- **Commit-Praxis:** _[z. B. sprechende Commits]_

## 6. KI-Deklaration

Die folgende Deklaration beschreibt den Einsatz von KI im Rahmen dieses Projekts.

### 6.1 KI-Tools

- **Eingesetzte Tools:**
  - _Perplexity AI (Claude Sonnet 4.6):_ Hauptsächlich eingesetzt für
    Codevorschläge, Komponentenstruktur und Dokumentation
  - _GitHub Copilot (optional):_ Unterstützung bei Autovervollständigung
    im Code-Editor

- **Zweck & Umfang:**
  - Generierung von SvelteKit-Komponentenstruktur (Navbar, Footer, Login-Page,
    Homepage)
  - Vorschläge für CSS Design Tokens und das globale Farbsystem
  - Erstellung der Projektdokumentation für REAMDME.md syntax
  - Beratung zur Dateistruktur und Best Practices in SvelteKit
  - Die generierten Code-Abschnitte wurden jeweils als Ausgangsbasis verwendet
    und anschliessend manuell angepasst

- **Eigene Leistung (Abgrenzung):**
  - Eigenständige Konzeption der Applikationsidee (MacroMate) und Definition
    der Anforderungen
  - Manuelle Integration aller Komponenten in das SvelteKit-Projekt
  - Anpassung von Farben, Inhalten und Struktur an die eigenen Vorstellungen
  - Testing und Debugging im lokalen Entwicklungsserver
  - Entscheidungen zu Design, Navigation und User Experience

---

### 6.2 Prompt-Vorgehen

Beim Einsatz von KI-Tools wurde grundsätzlich mit klaren, kontextbezogenen
Prompts gearbeitet. Dabei wurde jeweils der bestehende Code als Ausgangslage
mitgeliefert, damit die KI konsistente Vorschläge machen konnte, die zum
vorhandenen Stil und zur Projektstruktur passen.

Die Prompts wurden schrittweise verfeinert, zuerst mit einer allgemeinen
Anfrage, gefolgt von gezielten Anpassungsprompts. Dieses iterative Vorgehen
ermöglichte es, die KI-Ausgaben gezielt zu steuern und unnötige oder
unpassende Vorschläge direkt zu verwerfen.

---

### 6.3 Reflexion

**Nutzen:**
Der Einsatz von KI hat die Entwicklung deutlich beschleunigt, insbesondere
bei repetitiven Aufgaben wie dem Aufsetzen von Bootstrap-Komponenten oder
dem Schreiben von CSS-Variablen.

**Grenzen:**
KI-generierter Code muss stets auf Korrektheit und Kompatibilität geprüft
werden. Vereinzelt wurden veraltete SvelteKit-Syntaxen vorgeschlagen, die manuell
korrigiert werden mussten.

**Risiken & Qualitätssicherung:**

- Alle KI-Vorschläge wurden vor der Integration ins Projekt lokal getestet
- Logik und Berechnungen (z. B. Makro-Kalkulation) wurden eigenständig
  überprüft und nicht blind übernommen

## 7. Anhang [Optional]

Beispiele:

- **Quellen:** _[verwendete Vorlagen/Assets/Modelle; Lizenz/Urheberrecht; ...]_
- **Testskript & Materialien:** _[Link/Datei]_
- **Rohdaten/Auswertung:** _[Link/Datei]_
