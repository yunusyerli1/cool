import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  headerTitle:string = '';
  headerSubtitle:string= '';
  locations:any= [
    {
      "image": "https://lh3.googleusercontent.com/pw/AM-JKLUgTIqMRBLP2pKLmPhwwMn66gyLimAW6E7l-O2djXHmWl3Lk_7qDM2mtLvbTEDCynauHqayt7VCXotdr8PVDbZwXDW5GSeZrGQdqQVZHY__VvN6nQutx_oMqIWSNToD90JhttdpOAjZEkucHz9OC2Ti=w31-h23-no?authuser=0",
      "licences": 350,
      "name": "Atasehir",
      "products": {
        "monitoring": true,
        "exams": true,
        "applicationLibrary": true
      },
      "enrollmentDate": 1629198614
    },
    {
      "image": "https://lh3.googleusercontent.com/pw/AM-JKLVHQdTFvdbpIhBdAdvhXLsKG4r4xRgyHmUOOua1eV8USPQRC4t_54XHQFoiHVpVHecr-QY5KTK-ua0A_Aj-sed4XwcOfDVEaSSs5jcATF74aNzmkCM9-RnR7Eqpe39mDxy08qy3GCJyEyhMuMJTh9XI=s24-no?authuser=0",
      "licences": 350,
      "name": "Sariyer",
      "products": {
        "monitoring": false,
        "exams": true,
        "applicationLibrary": true
      },
      "enrollmentDate": 1629198614
    },
    {
      "image": "https://lh3.googleusercontent.com/pw/AM-JKLXOvVy6gdFEYg8PNWNm5nqkVMUTRlETmF_0uERYwi7lngUumdsPI1749B4oceIlmWzv4WKxO9uvwHbspGJ0n6BVJnIxeervxZ-sNMDRbfWWji4kJP7-YIgaU7fly22t06t4iwiiCLSlG2z6YnsegVqO=w31-h26-no?authuser=0",
      "licences": 350,
      "name": "Bakirkoy",
      "products": {
        "monitoring": true,
        "exams": true,
        "applicationLibrary": true
      },
      "enrollmentDate": 1629198614
    },
    {
      "image": "https://lh3.googleusercontent.com/pw/AM-JKLVGbbLxQeQo_Dazvn_hWuWhImR_ns_GZH_eU_BkHsps-OTiq4qeQQDW1rWpXC1hV8B1wO9kFxZa5XA8x0XKTnIFu3bXl_WxG5nEjV5-YDxZaYuFzpGb6WWnsDZGcmZ7eOVIuOEPw_820ONx_g-i-GvK=w31-h23-no?authuser=0",
      "licences": 350,
      "name": "Besiktas",
      "products": {
        "monitoring": true,
        "exams": true,
        "applicationLibrary": false
      },
      "enrollmentDate": 1629198614
    },
    {
      "image": "https://lh3.googleusercontent.com/pw/AM-JKLWaEOOeJM9tVSsrOJBERke4IakaYTjtjuTZYsHQlqRfBJMFCfBkOCe00jZJNYbzMzjvBkoZ2_jJ9hFrWsSf8k9-advXf1MfnTnRpuu-KfsnqUhEzyyW5Bh0lonKBuk0TlhkYmPcXa-CC1q1QD2_pc1V=s24-no?authuser=0",
      "licences": 350,
      "name": "Kadikoy",
      "products": {
        "monitoring": true,
        "exams": true,
        "applicationLibrary": true
      },
      "enrollmentDate": 1629198614
    },
    {
      "image": "https://lh3.googleusercontent.com/pw/AM-JKLU7h0rjOOsLE4nHg-suge0V9XU5DWQwfkF-GyLNzQu6H_EUHTyzmkshdUGsJhHJdM7d2DJ63CRP1QHba73KD_5yDeY2DYcKyfm3J777peRTfxBfvCiTxpTGBxBozfJixVTZIOoGc0un-aOgN8vf15nV=w31-h26-no?authuser=0",
      "licences": 350,
      "name": "Maslak",
      "products": {
        "monitoring": false,
        "exams": false,
        "applicationLibrary": true
      },
      "enrollmentDate": 1629198614
    }
  ]

  constructor(private http: HttpClient) { }

  public upload(params): Observable<any> {
    return this.http.post(environment.CLOUDINARY_API, params);
  }
}
