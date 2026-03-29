type ContactItem = {
  label: string;
  href: string;
  value: string;
};

type GpgKey = {
  id: string;
  fingerprint: string;
  uid: string;
  href: string;
};

type Project = {
  id: string;
  title: string;
  paragraphs: React.ReactNode[];
};

const contactItems: ContactItem[] = [
  {
    label: "Email",
    href: "mailto:business@donovanmaas.dev",
    value: "business@donovanmaas.dev",
  },
  {
    label: "Website",
    href: "https://www.donovanmaas.dev",
    value: "donovanmaas.dev",
  },
  // {
  //   label: "Phone",
  //   href: "tel:+1-507-403-0427",
  //   value: "+1 (507) 403-0427",
  // },
  {
    label: "Github",
    href: "https://www.github.com/hyfloac/",
    value: "github.com/hyfloac",
  },
];

const gpgKeys: GpgKey[] = [
  {
    id: "6CC61CF8231A30AF",
    fingerprint: "04E1 10E1 9E60 AF06 B3C8 75A4 6CC6 1CF8 231A 30AF",
    uid: "Donovan Maas <mail@hyfloac.com>",
    href: "/keys/donovan-maas-mail-hyfloac-com.txt",
  },
  {
    id: "A76673BE0663EE2D",
    fingerprint: "3BA7 2BA9 1805 3F97 366C 1759 A766 73BE 0663 EE2D",
    uid: "business@donovanmaas.dev <business@donovanmaas.dev>",
    href: "/keys/business@donovanmaas.dev-3ba72ba918053f97366c1759a76673be0663ee2d.txt",
  },
  {
    id: "9D1B02D8A203B574",
    fingerprint: "1551 3AD7 F3D4 C2C1 2881 275F 9D1B 02D8 A203 B574",
    uid: "donovan@donovanmaas.dev <donovan@donovanmaas.dev>",
    href: "/keys/donovan@donovanmaas.dev-15513ad7f3d4c2c12881275f9d1b02d8a203b574.txt",
  },
  {
    id: "AA6127F18CB207CC",
    fingerprint: "4AB7 1993 5829 A42A 5B9D 0D74 AA61 27F1 8CB2 07CC",
    uid: "Donovan Maas <donovan.maas@grafikastrahlen.dev>",
    href: "/keys/donovan-maas-grafikastrahlen-dev.txt",
  },
  {
    id: "DFA5CB50E4B13AEA",
    fingerprint: "B976 5D16 2D1E C6FB 0EEB 90D4 DFA5 CB50 E4B1 3AEA",
    uid: "Donovan Maas <donovan.maas@donovanmaas.com>",
    href: "/keys/donovan-maas-donovanmaas-com.txt",
  },
];

const languages = [
  "C",
  "C++",
  "C#",
  "Java",
  "x86 & x86-64 Assembly",
  "LLVM IR",
  "GLSL",
  "HLSL",
  "VHDL",
];

const platforms = [
  "Micronaut",
  "ASP.NET",
  "Direct3D 10",
  "Direct3D 11",
  "Direct3D 12",
  "Vulkan",
  "OpenGL",
  "NestJS",
  "Docker",
  "Podman",
  "WDDM",
];

const specialties = [
  "Computer Graphics Programming",
  "Systems Engineering",
  "Language and Data Parsers",
  "Object Oriented Programming",
];

const projects: Project[] = [
  {
    id: "tau-engine",
    title: "Tau Engine",
    paragraphs: [
      <>
        <a href="https://github.com/hyfloac/TauEngine/releases/tag/v1.0-beta.0">
          Tau Engine
        </a>{" "}
        is a 3D rendering engine with backends written in OpenGL 4.3, Direct3D
        10, and Direct3D 11.
      </>,
      "The abstraction makes the backend implementation opaque to the end user, leaving no visual differences between the scenes.",
      "You may notice a visual difference in the release as there is an additional post processing shader running in D3D. This is implemented for both APIs, but was disabled for OpenGL to provide a visual indication that they are in fact running different backends.",
    ],
  },
  {
    id: "tau-reflection-generator",
    title: "Tau Reflection Generator",
    paragraphs: [
      <>
        <a href="https://github.com/hyfloac/TauEngine/releases/tag/1.0">
          Tau Reflection Generator
        </a>{" "}
        is a utility executable designed to act similarly to Unreal Engine&apos;s
        UnrealHeaderTool.
      </>,
      "I wanted to improve on the parsing abilities of the tool, as UE's tool had very rudimentary syntax parsing, so I used Clang's API to accurately parse C++.",
      "The tool goes through header files, finds special macros, records their position, then iterates through the AST to capture the tagged element data. An extensible utility then generates a new header with macros for injecting custom code into the class.",
      'As a demo, this generates reflection data for a class and allows you to configure which properties it adds the ability to get or set to. The special macros can currently take identifiers like "get" and "set", but the system can be extended to support richer lexable syntax.',
    ],
  },
  {
    id: "tau-ir",
    title: "Tau IR",
    paragraphs: [
      "Tau IR is a small proof-of-concept intermediate representation. It is intended to be encoded into a .exe file similar to the CLR.",
      "When launched, it sets its entry point to a member of a DLL, which walks the IR and JIT-compiles it. The JIT first converts the stack-based IR into an SSA-based IR similar to LLVM IR, making it easier to optimize before lowering into optimized x86-64 assembly.",
    ],
  },
  {
    id: "parsers",
    title: "Parsers",
    paragraphs: [
      "I have a lot of experience writing parsers. I've written custom data file parsers, custom programming language parsers, HTML parsers, and JSON parsers.",
      <>
        I have also written{" "}
        <a href="https://datatracker.ietf.org/doc/html/rfc822#section-6">
          RFC 822
        </a>
        ,{" "}
        <a href="https://datatracker.ietf.org/doc/html/rfc2822#section-3.4.1">
          RFC 2822
        </a>
        , and{" "}
        <a href="https://datatracker.ietf.org/doc/html/rfc5322#section-3.4.1">
          RFC 5322
        </a>{" "}
        compliant email address validators.
      </>,
    ],
  },
  {
    id: "gpu",
    title: "GPU",
    paragraphs: [
      "For fun I've been designing my own GPU. While I do have some experience with VHDL, I am mostly leaving the hardware side to a friend.",
      <>
        In the meantime I&apos;ve been working on writing the{" "}
        <a href="https://github.com/Grafika-Strahlen/GpuDrivers">drivers</a>.
        This includes the Kernel Mode Display Miniport Driver and the User Mode
        Vulkan Installable Client Driver.
      </>,
      "In the future I plan on also adding the User Mode Display Driver (DirectX) and integrating the OpenGL ICD into the Vulkan ICD, as this seems to be a common industry practice.",
      <>
        I currently plan on emulating the GPU with GHDL and hosting it using a{" "}
        <a href="https://www.virtualbox.org/browser/vbox/trunk/src/VBox/Devices/Samples/DevPlayground.cpp">
          VirtualBox Device Module
        </a>
        .
      </>,
      <>
        As an intermediary I have been implementing the{" "}
        <a href="https://github.com/Grafika-Strahlen/SoftGpu">GPU</a> in
        software. This is designed with conversion to hardware in mind. This
        version is currently able to be loaded into VirtualBox, with a UEFI
        Graphics Output Protocol driver that can be successfully loaded, and the
        Display Miniport Driver can be loaded into Windows 10.
      </>,
    ],
  },
];

function Card({
  title,
  children,
}: Readonly<{
  title: string;
  children: React.ReactNode;
}>) {
  return (
    <section className="card-shell">
      <div className="card-body">
        <h2>{title}</h2>
        {children}
      </div>
    </section>
  );
}

function ContactTable() {
  return (
    <dl className="contact-table">
      {contactItems.map((item) => (
        <div className="contact-row" key={item.label}>
          <dt>{item.label}:</dt>
          <dd>
            <a href={item.href}>{item.value}</a>
          </dd>
        </div>
      ))}
    </dl>
  );
}

function GpgKeyList() {
  return (
    <ul className="gpg-list">
      {gpgKeys.map((key) => (
        <li className="gpg-item" key={key.id}>
          <div className="gpg-meta">
            <p className="gpg-id">{key.id}</p>
            <p className="gpg-uid">{key.uid}</p>
            <p className="gpg-fingerprint">{key.fingerprint}</p>
          </div>
          <a href={key.href} className="gpg-link">
            Public key
          </a>
        </li>
      ))}
    </ul>
  );
}

function ProjectList() {
  return (
    <div className="project-list">
      {projects.map((project) => (
        <details className="project-item" key={project.id} name="projects">
          <summary>{project.title}</summary>
          <div className="project-content">
            {project.paragraphs.map((paragraph, index) => (
              <p key={project.id + "-" + index}>{paragraph}</p>
            ))}
          </div>
        </details>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main className="landing-page">
      <div className="page-frame">
        <header className="hero">
          <p className="eyebrow">Software Engineer</p>
          <h1>Donovan Maas</h1>
        </header>

        <div className="content-grid">
          <div className="stack stack-contact">
            <Card title="Contact">
              <ContactTable />
            </Card>

            <Card title="PGP">
              <GpgKeyList />
            </Card>
          </div>

          <div className="stack stack-profile">
            <Card title="Languages">
              <p className="body-copy">{languages.join(", ")}</p>
            </Card>

            <Card title="Frameworks & Platforms">
              <p className="body-copy">{platforms.join(", ")}</p>
            </Card>

            <Card title="Specialties">
              <ul className="bullet-list">
                {specialties.map((specialty) => (
                  <li key={specialty}>{specialty}</li>
                ))}
              </ul>
            </Card>
          </div>

          <div className="stack stack-projects">
            <Card title="Projects">
              <ProjectList />
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
