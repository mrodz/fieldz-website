<script>
  import { slide } from "svelte/transition";
</script>

<main class="m-8" in:slide out:slide>
  <h1 class="h1">Services</h1>

  <div class="card my-4 p-4">
    <h2 class="h2 mb-2">Fieldz Desktop (FREE)</h2>

    <p>
      Our Youth Sports Scheduling App is designed to simplify the intricate
      process of organizing and managing youth sports events across various
      regions. Available on Mac, Windows, and Ubuntu, this versatile application
      caters to the needs of coaches and regional administrators, ensuring
      seamless scheduling and coordination.
    </p>

    <hr class="hr my-4" />

    <h3 class="h3">Key Features</h3>
    <ul class="my-4">
      <li>
        <strong>Regional Coordination:</strong>
        Manage multiple teams and sports events across different regions with ease.
        The app supports region-specific settings and preferences, making it adaptable
        to various locales.
      </li>
      <li>
        <strong>User-Friendly Interface:</strong>
        A detailed and straightforward user interface ensures that even non-technical
        users can navigate and utilize the app efficiently.
      </li>
      <li>
        <strong>Automated Scheduling:</strong>
        Save time and reduce errors with automated scheduling algorithms that consider
        factors such as team availability, coaching conflicts, and venue constraints.
      </li>
      <li>
        <strong> Conflict Resolution: </strong>
        Intelligent conflict resolution tools help identify and address scheduling
        conflicts, ensuring smooth and hassle-free planning.
      </li>
    </ul>

    <p>
      Whether you're organizing a local tournament or managing a league across
      multiple regions, our Youth Sports Scheduling App provides the tools you
      need to streamline the scheduling process, enhance communication, and
      ensure a successful sporting season.
    </p>
  </div>

  <div class="card my-4 p-4">
    <h2 class="h2 mb-2">Fieldz Scheduling Credits (FREE*)</h2>

    <p>
      While the desktop client is free to install and use, sending your data to
      our server and running our algorithm on your inputs costs us (Fieldz)
      money.
      <strong class="text-green-600 underline">
        For now, this service is 100% free for all use
      </strong>
      , as the user-base is small. However, this is subject to change if we experience
      a surge of users in order to facilitate the higher volume of requests.
    </p>

    <hr class="hr my-4" />

    <h3 class="h3">Key Features</h3>
    <ul class="my-4">
      <li>
        <strong>Pay-As-You-Go Pricing:</strong>
        Instead of paying for a license or subscription to use our servers, you will
        be charged only for the schedules you create on our backend. Given that our
        app is open source, you can run the backend yourself and skip paying for
        credits entirely. We ask for your understanding as using the cloud is not
        free, and credits act as a vessel for your region to enjoy the speed and
        efficacy of cloud computing without the hassle of setting up the backend
        yourself.
      </li>
      <li>
        <strong>Supports Development:</strong>
        This project was created to solve a problem in a local community, and is
        not funded by any source. Any and all credits purchased will go towards expanding
        the resources allocated to scheduling and our operation!
      </li>
    </ul>

    <div class="grid grid-cols-[auto_1fr] gap-2">
      <span class="text-red-500">*</span>
      <p>
        The price of scheduling credits is subject to change. Any Fieldz
        accounts will be notified before changes take place and the price of
        creating a schedule will resemble the market price of all cloud compute
        resources allocated to create the schedule.
      </p>
    </div>
  </div>
</main>
