import { TestBed } from "@angular/core/testing";
import { CheckValueService } from "./check-value.service"
import { SimpleService } from "./simple.service"

describe('Простой сервис', () => {

  let service: SimpleService
  const fakeCheckValueService = { check: () => true };

  beforeEach(() => {
    // service = new SimpleService( new CheckValueService)
    //service = new SimpleService( fakeCheckValueService as CheckValueService)
    TestBed.configureTestingModule({
      providers: [
        SimpleService,
        { provide: CheckValueService, useValue: fakeCheckValueService},
      ],
    })

    service = TestBed.inject(SimpleService)
  })

  it('должен создавать єкземпляр класса', () => {
    // const service = new SimpleService()
    expect(service).toBeTruthy()
  })

  it('должен суммировать два числа', () => {
    const sum = service.sum(1, 2)
    expect(sum).toBe(3)
  })

  it('должен возвращать undefined, если второго аргумента нет', () => {
    const sum = service.sum(1)
    expect(sum).toBeUndefined()
  })

  it('должен возвращать 22, если первого аргумента нет', () => {
    const sum = service.sum(undefined, 2)

    expect(sum).toBe(22)
  })

  it('должен проверять значение', () => {
    const value = service.check()
    expect(value).toBeTruthy()
  })
})
