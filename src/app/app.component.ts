import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  basics = {
    name: "Juan Jose Hidalgo Rojas",
    label: "Full Stack Developer",
    image: "/me.webp",
    email: "juanjosehidalgorojas@gmail.com",
    phone: "+57 3502427390",
    url: "",
    summary: "I am a software developer focused on desktop applications, where I craft robust solutions using C# and TypeScript alongside frameworks like .NET and Angular. My journey in software development is driven by a passion for creating high-quality applications that meet user needs and streamline their tasks.",
    location: {
      address: "",
      postalCode: "111121",
      city: "Bogotá",
      countryCode: "CO",
      region: "Colombia"
    }
  };
  profiles = [
    {
      network: "LinkedIn",
      username: "midudev",
      url: "https://linkedin.com/in/juan-jose-hidalgo-rojas"
    },
    {
      network: "GitHub",
      username: "juanjhidalgor",
      url: "https://github.com/juanjhidalgor"
    }
  ];
  education = [
    {
      institution: "Politecnico Internacional",
      url: "https://politecnicointernacional.edu.co/sw/es",
      area: "Web Developer",
      studyType: "Tecnologo",
      startDate: "2021-01-01",
      endDate: "2024-09-01",
      score: "4.0"
    },
    {
      institution: "Cymetria",
      url: "https://talentotechbogota.co/",
      area: "Fullstack Javascript",
      studyType: "Bootcamp",
      startDate: "2024-05-01",
      endDate: "2024-08-01",
      score: "4.0"
    }
  ];
  skills = [
    {
      name: "TypeScript",
      icon: 'typescript',
      keyword: "Language"
    },
    {
      name: "csharp",
      icon: 'csharp',
      keyword: "Language"
    },
    {
      name: "Git",
      icon: 'git',
      keyword: "Backend"
    },
    {
      name: "Node",
      icon: 'nodejs',
      keyword: "Backend"
    },
    {
      name: "Core",
      icon: 'dotnetcore',
      keyword: "Framework"
    },
    {
      name: "Angular",
      icon: 'angularjs',
      keyword: "Framework"
    }
  ];
  projects = [
    {
      name: "Wiki 2.0",
      isActive: true,
      description: "Mad remodel of the official sci-fi wiki 'The SCP Foundation'.",
      highlights: [
        "Independent"
      ],
      url: "project-info:wiki2.0",
      github: ""
    },
    {
      name: "Oasis",
      isActive: false,
      description: "Dope interactive platform for gaming events and pop culture",
      highlights: [
        "Independent"
      ],
      url: "project-info:oasis",
      github: ""
    },
    {
      name: "A-113",
      isActive: false,
      description: "Sick tracker for the germination of plants in the 'Guerrero' páramo.",
      highlights: [
        "Independent"
      ],
      url: "project-info:A-113",
      github: ""
    },
    {
      name: "keyMorse",
      isActive: false,
      description: "Straight fire messaging app for the corporate grind.",
      highlights: [
        "Independent"
      ],
      url: "project-info:keymorse",
      github: ""    }
  ]
}
