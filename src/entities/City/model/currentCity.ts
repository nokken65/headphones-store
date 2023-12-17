import { atom, onMount, task } from 'nanostores'

const $currentCity = atom('Moscow')

onMount($currentCity, () => {
  task(async () => {
    try {
      navigator.geolocation.getCurrentPosition(
        async position => {
          const url = `https://geocode-maps.yandex.ru/1.x?apikey=${
            import.meta.env.VITE_YANDEX_GEOCODER_API_KEY
          }&geocode=${position.coords.longitude},${position.coords.latitude}&format=json`

          const res = await fetch(url)
          const data = await res.json()

          const city =
            data.response.GeoObjectCollection.featureMember[0].GeoObject.metaDataProperty.GeocoderMetaData.Address.Components.find(
              (comp: { kind: string; name: string }) => comp.kind === 'locality'
            ).name

          if (city) {
            $currentCity.set(city)
          }
        },
        () => {},
        { enableHighAccuracy: true }
      )
    } catch (error) {
      return
    }
  })
})

export { $currentCity }
