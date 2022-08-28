<script>
  import TextInput from '../TextInput.svelte';
  import SectionHeader from '../SectionHeader.svelte';
  let jsonResume = {
    basics: {
      name: 'John Smith',
      label: 'Occupation',
      image: '',
      email: 'john@gmail.com',
      phone: '(912) 555-4321',
      url: 'https://johndoe.com',
      summary: 'A summary of John Doe…',
      location: {
        address: '2712 Broadway St',
        postalCode: 'CA 94115',
        city: 'San Francisco',
        countryCode: 'US',
        region: 'California'
      }
    }
  };
</script>

<div class="mt-5">
  <div class="md:grid md:grid-cols-2 md:gap-6">
    <div class="md:col-span-1">
      <div class="mt-10 sm:mt-0">
        <div class="md:grid md:grid-cols-2 md:gap-6">
          <div class="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div class="shadow overflow-hidden sm:rounded-md">
                <div class="px-4 py-5 bg-white sm:p-6">
                  <div class="col-span-6 sm:col-span-6">
                    <SectionHeader
                      label="Personal Information"
                      description="Use a permanent address where you can receive mail"
                    />
                    <TextInput bind:value={jsonResume.basics.name} label="Name" />
                    <TextInput bind:value={jsonResume.basics.label} label="Label" />
                    <TextInput bind:value={jsonResume.basics.email} label="Email address" />
                    <TextInput bind:value={jsonResume.basics.phone} label="Phone number" />
                  </div>
                </div>

                <div class="px-4 py-5 bg-white sm:p-6">
                  <div class="col-span-6 sm:col-span-6">
                    <SectionHeader
                      label="Location"
                      description="Use a permanent address where you can receive mail"
                    />

                    <TextInput bind:value={jsonResume.basics.location.address} label="Address" />
                    <TextInput
                      bind:value={jsonResume.basics.location.postalCode}
                      label="Postal Code"
                    />
                    <TextInput bind:value={jsonResume.basics.location.city} label="City" />
                  </div>
                </div>
                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >Save</button
                  >
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="md:col-span-1">
      <label for="jsonResume" class="block text-lg font-medium text-gray-700"> Json Resume </label>
      <div class="mt-1 h-screen">
        <div
          id="jsonResume"
          class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block h-max w-full flex-none sm:text-sm border border-gray-300 rounded-md "
        >
          <pre><code class="json">{JSON.stringify(jsonResume, null, 2)}</code></pre>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- My changes above -->

<div>
  <div class="md:grid md:grid-cols-3 md:gap-6">
    <div class="md:col-span-1">
      <div class="px-4 sm:px-0">
        <h3 class="text-lg font-medium leading-6 text-gray-900">Profile</h3>
        <p class="mt-1 text-sm text-gray-600">
          This information will be displayed publicly so be careful what you share.
        </p>
      </div>
    </div>
    <div class="mt-5 md:mt-0 md:col-span-2">
      <form action="#" method="POST">
        <div class="shadow sm:rounded-md sm:overflow-hidden">
          <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
            <div class="grid grid-cols-3 gap-6">
              <div class="col-span-3 sm:col-span-2">
                <label for="company-website" class="block text-sm font-medium text-gray-700">
                  Website
                </label>
                <div class="mt-1 flex rounded-md shadow-sm">
                  <span
                    class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"
                  >
                    http://
                  </span>
                  <input
                    type="text"
                    name="company-website"
                    id="company-website"
                    class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                    placeholder="www.example.com"
                  />
                </div>
              </div>
            </div>

            <div>
              <label for="about" class="block text-sm font-medium text-gray-700"> About </label>
              <div class="mt-1">
                <textarea
                  id="about"
                  name="about"
                  rows="3"
                  class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                  placeholder="you@example.com"
                />
              </div>
              <p class="mt-2 text-sm text-gray-500">
                Brief description for your profile. URLs are hyperlinked.
              </p>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700" for="photo"> Photo </label>
              <div class="mt-1 flex items-center">
                <span class="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                  <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </span>
                <button
                  type="button"
                  class="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >Change</button
                >
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700" for="photo">
                Cover photo
              </label>
              <div
                class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
              >
                <div class="space-y-1 text-center">
                  <svg
                    class="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div class="flex text-sm text-gray-600">
                    <label
                      for="file-upload"
                      class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" class="sr-only" />
                    </label>
                    <p class="pl-1">or drag and drop</p>
                  </div>
                  <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              type="submit"
              class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >Save</button
            >
          </div>
        </div>
      </form>
    </div>
  </div>
</div>

<div class="hidden sm:block" aria-hidden="true">
  <div class="py-5">
    <div class="border-t border-gray-200" />
  </div>
</div>

<div class="hidden sm:block" aria-hidden="true">
  <div class="py-5">
    <div class="border-t border-gray-200" />
  </div>
</div>

<div class="mt-10 sm:mt-0">
  <div class="md:grid md:grid-cols-3 md:gap-6">
    <div class="md:col-span-1">
      <div class="px-4 sm:px-0">
        <h3 class="text-lg font-medium leading-6 text-gray-900">Notifications</h3>
        <p class="mt-1 text-sm text-gray-600">
          Decide which communications you'd like to receive and how.
        </p>
      </div>
    </div>
    <div class="mt-5 md:mt-0 md:col-span-2">
      <form action="#" method="POST">
        <div class="shadow overflow-hidden sm:rounded-md">
          <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
            <fieldset>
              <legend class="sr-only">By Email</legend>
              <div class="text-base font-medium text-gray-900" aria-hidden="true">By Email</div>
              <div class="mt-4 space-y-4">
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      id="comments"
                      name="comments"
                      type="checkbox"
                      class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="comments" class="font-medium text-gray-700">Comments</label>
                    <p class="text-gray-500">
                      Get notified when someones posts a comment on a posting.
                    </p>
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      id="candidates"
                      name="candidates"
                      type="checkbox"
                      class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="candidates" class="font-medium text-gray-700">Candidates</label>
                    <p class="text-gray-500">Get notified when a candidate applies for a job.</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      id="offers"
                      name="offers"
                      type="checkbox"
                      class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="offers" class="font-medium text-gray-700">Offers</label>
                    <p class="text-gray-500">
                      Get notified when a candidate accepts or rejects an offer.
                    </p>
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <legend class="contents text-base font-medium text-gray-900"
                >Push Notifications</legend
              >
              <p class="text-sm text-gray-500">These are delivered via SMS to your mobile phone.</p>
              <div class="mt-4 space-y-4">
                <div class="flex items-center">
                  <input
                    id="push-everything"
                    name="push-notifications"
                    type="radio"
                    class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                  />
                  <label for="push-everything" class="ml-3 block text-sm font-medium text-gray-700">
                    Everything
                  </label>
                </div>
                <div class="flex items-center">
                  <input
                    id="push-email"
                    name="push-notifications"
                    type="radio"
                    class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                  />
                  <label for="push-email" class="ml-3 block text-sm font-medium text-gray-700">
                    Same as email
                  </label>
                </div>
                <div class="flex items-center">
                  <input
                    id="push-nothing"
                    name="push-notifications"
                    type="radio"
                    class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                  />
                  <label for="push-nothing" class="ml-3 block text-sm font-medium text-gray-700">
                    No push notifications
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              type="submit"
              class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >Save</button
            >
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
