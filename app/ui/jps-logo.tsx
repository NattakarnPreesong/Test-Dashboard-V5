// import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function JPSLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      {/* <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" /> */}
      <img className="h-12 w-12"  src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAjAAAAE0CAYAAAAyiAnkAAAAAXNSR0IB2cksfwAAFpxJREFUeJzt3c1vXNd5wOFzbbkSaMFy/CFZRgwrietN66QwELRLedcAAVrElcrhkoCA/Af9+DO6FcBdRZZsFwW66UrsIkALOAIMGygQb2K7XcjcVIZEwCnU28VwRIqcIWeG5957Pp5nGcTSNUnP/Pi+594JAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAMjVDXwBAakajte22bd8Mobm5/J/S7jZNs7e5ee92zGsDxgQMUKU4kbIscQPnJWCA4g0bK/MSNbAIAQMUJ49gOYuggdMIGJJVxptQ17zJTZT/8+J7DUddGPoCYJa2Dbc09lmam2079DUMaxIubRtulv3zMv5er66uHXzHBQ11EzBAluoJl1kmQTO6L2SokYABsiJcjmtutm27O/RVQN8EDJAF4XKa5uZotLZtCkNNBAwJa3fLPZDJvLoLl3hnSFI4QDw+Mwb1EDAkq2mavfFoXMTMNn4THvoquhA/XLo79Hr8z0whaKB05rBkpd43hrruOBl/n2NMFIb/uvX5M7u1dc9rOtXww04xyomb4d90h7K+fmd7f/9xlO9h04SdlL6Gffx8Chhq4oedYuUTNPUGy1Expy4rK5f3NjbuJvn1jPfveZKAoSZ+2ClezN/q40r7jbZPsd7UU5u6zNJVxAgYauKHnWp0+ZvvonJ5o+1DnO9LfjHYRVj7uaImAoaqjN80ngwaMd5kDsWIl9y/nnHDut3d2tr8KM6fBWl7YegLgD5tbNy93TRhZ6i/P/c325jEy9jm5r2IP5OprUmhOwKG6sR9w1hEu5v7m20ssdZGpXw9h/uZhHwJGKo0xBtfqQ+cW1SslcnKyuWivp4iBhYjYKhYvx+AV8q04Dxi3m2U04HdeY1/RnwwI8xDwFAtE5F+1Xar9LJKmyxBVwQM1er3TbDu36rX1+9Ee0hdyfESEjhoDrkQMNCD2qc94+ednF8tX8fznIcZjda2418RpEfAQA9KnxqcZvyGGuP23vKnL0ctex5m/PEZUD4BQ+XqXu10Ld7qqM6zIctNnDwLhjoIGKpWy0piKLFWRyG0uyXedXQWdyXBbAKGqtW0kuhbvNVR3aFZ4+QJ5iFggE7EPItRc2iOJ0+mMHCcgAGiizl98eZtCgPTCBggupjTl5rXRxOmMHCSgAGiWl+/E3H6Uvf66KhFQs6zYKiBgAGiinfnEUctckeSZ8FQAwEDROY5JF2Zfwrje0D5BAwQjdVFt6zT4JCAAaKxuuiDw7wQBAwQl9VF19xSDWMCBojC+qgfbqmGMQEDRGF91J95DvMKSkonYIBIrI/6Ms9hXkFJ6QQMQJbOWiMJSsomYAAy5CMWqJ2AAcjQ2WskB30pm4AByNasSGl3TWgo3YWhLwDI32i0tt22Q19FfZqm2Wvbcax4Si+1ETDAuY3veGmGvozqiBZqZoUEROCOF6BfAgYAyI6AAZLmibLANAIGSJonygLTCBggcc7XACcJGCB51kjAcQIGSJ41EnCcgAEi6Pqx9c1NUxjgKAEDnFsfj603hQGOEjDAufXzRFhTGOCQgAGyYQoDTAgYICOmMMCYgAEi6fog78Hf0oZbIgYQMEAUfRzknWjbcGt9/Y6IgYoJGCCKfg7yHtrff+w8DFRMwAAR9bNGGnMeBmomYIBo+lwjBedhoGoCBoim7zVSEDFQLQEDRNbnGungbxQxUB0BA0S1snK51zXSRNuGW6uro/vuToI6CBggqo2Nu7eHmMKMNTf395+YxkAFBAwQXd+HeY+zUoLyCRgguvFh3qGmMGNWSlA2AQN0YqizMM+zUoJSCRigExsbd283TdgZ+jqCaQwUScAAnUlhlXTINAZKImCATg19oPe4yTRGyEDeBAzQqc3Ne8mskg41N62VIG8CBuhcWquko6yVIFcCBuhFGnclTWetBPkRMEAvUrorabrDtZKQgfQ1Q18ADG11da3t+u/Y2rrnv7UDo9HadtuGW0Nfx9na3aZp9ob4hG1IyYNrN7ZDaN8MIdyc8X/ZDaHZ+/Dhb3v9b8WLKtUTMP3LJ2KCkCFbc4THPAaJk3l4UaV6AmYYeUVMEDIMIlKEnCbZQDmLF1WqJ2CGk1/EBCHDufQQJNNkGymn8aJK9QTMsPKMmCBkeGagKDmuyEg5jRdVqidghpdvxAQhU7BEwuSo6iLlNF5UqZ6ASUPeEROETGYSjJMJkTInL6pUT8CkY339zvb+/uM3Q2hSe1NZgJAZWsJxcpRQOScvqlRPwKQn/2lMEDIdyiRQJoRKR7yoUj0Bk6YyIiYImSVkFigTQqVnXlSpnoBJ1zhi2sxXShNC5qhMIyUIlXR4UaV6AiZ95UxjQjUhk3GgTAiVxHlRpXoCJg9lTWNCMSFTQKgEsZInL6pUT8DkpaxpTAghtLshhLC1tfnR0FcySyGREoRKWS4MfQEAi9jcvHe7tGlM0zR7Q19DODVUOm/8LoiVwgkYIDuTtUteIZPGyuj0aUqWoRLESp0EDJCt50MmlbVSGqESZsZKtpEyIVYIQcAAJdjcvHe7/6f4ph4qQaxQNAEDFGFj426Ha6U0YqXgUAlihUUJGKAoy52PSSNQjip0/XOUYOFcBAxQpLNDJq1oORksYgVOI2CAoqUSKKHcO4COEyv0QsAAdKCCFdCEYGEQAgbgnMQK9E/AACygolgJgoWUCRiAGcQKpEvAANQXK0GwkDsBA1Sp8NuWpxEsFEXAAMWrcLpyoNkRLJRKwADFqXC68szXr14JX33vSvjBn/08/Pxv/kq8UCwBA2St3unK2CRYvn71lfDVq1ee/e+/+vTTQa8LuiZggKzUPF0JpwTLNOvrd7YnH3IJpREwQNIEy/zBctz+/uM3O7swGJiAAZIiWJYPlpOam6PR2nZKnwcFsQgY6FjbtnW9Ay+g9vMrIXqwnNS24ZZVEiUSMNCxF1984b+GvoZU1D5dCSGEby6/HL569Ur4+ntXwlevvhK+u9D9y7BVEiUSMNCxtg3/N/Q1DEWwhPDo0sVnU5Yv3nitl2A5ySqJ8ggY6N4LQ19AXyoPlhNPuv3ln3+8/T+XLt4a9rLG2rY1haEozdAXAENbXV3r+F22+e+trb//frd/x3Cmn2OpxpmP519fv7M9XuE0g399mibsmMJQChMY6Fz7e0NfQUymLIt9ntDk8OxotLbdtmHQaYwpDCUxgaF63U9gwtOtrXvZ/rJgwhLvAxBTiBhTGEqR7YsqZOTFoS9gEZVPWEKXn9q8uXnv9tARYwpDKQQMcCxaBEuXho+Y4c/iQAxWSFSv6xVSiiP7ytdCoe9omWbIiEnxZxIWZQIDHUrpjcKUZdhgOW7ISYw1EiUQMNCJdrdpmr0h48VZlvSi5bjhIsYaifxZIVG9eCukFKOlKskHyyxDRExK00FYhgkMLC3FYDFlydEQkxhrJHInYGAhqUVLdcESSomW4zY3791eXR3d72+9Y41E3gQMnCq1YAmmLAVrmmavre7bC8txBobqnfytN8VoqU410XJcn1MY52DImQkM1Rv/1ptatFT5a3i10XLUysrlvf39J738Xc7BkDMTGBiIKUsIomW6PqcwW1v3vA+QJRMY6JEpSwii5Wx9TmEgV8obOmbSIliW0dcUxgSGXJnAQAdMWkTLebkjCU6nvCESk5axp6+9vvPT/3wgXCLo+oNGgwkMGTOBgXMwaRl7dOli+OKN18Pn16+Gv/uXfxYvQOcEDCzAQ+UOfXP55fDFm6+HL954LXxz+eVn//totLbt2SKxtLuemAvTCRg4gynLofYHN8L9C0344o3Xw6NLF6f/fzxbJBrnYGA2AQNTiJYQph3E/e1//Nv2J3/9t2d84KCJQSzjz0fq/hwM5OiFoS8AUvHg2o3tB9fevf/g2rttCO2tSg/j7obQ7Hz48Mvmw4dffnT8LqIbN27cbpqwc9YfMhqtbXd6lUD1TGComklLCIve8jzPVMAaKRft7tBXAMsSMFRHtITQ/XNampsO86avaZq9oa8BliVgqIJoCaHvh8uZwqRPYJIzAUOxREsIwz4R12FeoDsChuIchktb8xtoEo/yt0YCuiJgKIJpSwj9Rst8D1izRkqZA7zkTcCQLdESwlCTlvkfsOYwb6oc4CV3AoasiJYQUlgPLfKANVOYNIlKcidgSJ5oeWbwcFmOKUx6rI/In4AhSaLlmUyj5XmmMGmxPqIEAoakuIMohHyiZZFPSjaFSYnvAyUQMAzOtOWZTMJlbNFPSjaFSYX1EWVohr4A6vR8tFQtq2g5btFPSm6asOO3//mNRmvbbRvO+PTvxfgeUAoTGHrz6fsfbD999K1Jy1jW4bKstg231tfvbG9s3K3q33tZseMlhHZ3c3PT154iCBg6N5m2PH30rWlLhdFy3P7+Y6ukgTi8S0kEDJ1wruW4Zqf2cDnkQO8wTF8oywtDXwDl+PT9D7YfXHv3/oNr77YhtLecbwnh0aWL4d//6A8KjpflDoROVknxr6cco9Fa1K+P6QulMYHh3KyITvr8ravh8+tXw1evXglbW+VOGha9E+koq6TTje/ainWfhekL5REwLMWK6KRHly6GX7/zdvjsravhuwt1/Ke1yEcKnGSVNMv6+p3t/f0n0X4hMH2hRHW8yhKNB82d9MUbr4XPr18LX7zx2tCXkp22DbdEzEnj6ZTpC5xGwHAm05aTvrtwIXz21tXw63feDo8uXRz6crLm1upp5n3C8dlWVi6bvlAkAcNMpi0nfXP55fDJO2+Hz9+6OvSlFMV5mEMHD6+LomnCjjCkVAKG55i2TPf5W1fDJ++8Hb65/PLQl5KgRT4TaRbnYcLh2ZcoD6/zxF1KJ2AIwbRlqkeXLobPr18Ln3z/ejWHcpdxnjuRjnIeJubZF+deKJ9X5YqZtkz39atXwmfXr1oTzel8dyI9r+aIOVgdRfkFwrkXaiBgKmTaMt3RZ7cwnBojJvbqyLkXaiBgKmHaMt13Fy48O5TrbqJ01BQxzr3AcnyUQOEeXLux/eDau/c92v+Z3fHnEn3ZfPjwy+ZfR7/Y+dWNd8TLuS33kQKn/okHERP7z01NrDuwxAu1ifWkJBLy/LSFAzM/CTrW+Y1ZtrbuFf/f2cH5jShThJPa3ZWVy3slrkVifd3ECzUq/oW1JsJlqpnhMiFg4uj661jSm/R4bfT4zRgPrCvp6wKLcAamAA7lTrX74pVX9n7ym8+8sBeilHMxo9HawZmX83eteKFmAiZTDuVO9fy05eHZ/0DMp55OF/9sSLpiPNDujL+hDbdWV0f3m6bZy/GNO96qrdy1GsxLwGTGtGWqM9dEs7RtG/FD806q6VOAYz3Qbo6/6WbbhrC6Orqfy5v4ZGUU4zkv46mLh9RBFbv53H36/gfbTx9962zLSUuHy4TzL3F1/fWcLt1pRMyzLsHKCJ5jApOwybTl6aNvhcvzzh0ulKS5ub//JKS0WpqEy/7+k5uxPhoglX83SIWASZA10UzCJXndn4OZ7XC1NNSb/fiMSxsxXKyMYBYBkxDhMpVoyUh/52BOvYqDkJmss7qbXhw/lDv+d4+1NUx3NQYpqGo/nyLPbpmpl3BxBia+yRRiuEnMIs6Om/7/fayLYB7VvbimQrjM1OvERcB0K6+YGZpwgUVYIfXMmmimAldFNT0DZrrJm7GQOc0kXJxzgUUImJ4Il5kKDJexmp4BcxYhM41wgfOoerzdNc9vOVUS4dLlCqn29dFZ6owZayKIxQSmA57fcqokwoXhHX0TLz9mTFsgNgETkTXRqYQLMx2fSJQRNKYt0CUBE4FwOZVwYWF5Bo1ggT4JmHMQLqdKPly6/SRqdyDFNC0Kho0asQJDEzBLEC6nSj5cJrr8JGp3IHWvu4fPiRPIgbskFuDhc6fKJlwm3IEEkC8TmDmYuJyl2ckpXADIn4CZ4flpy+CfTpeq3RevvLL3k998Jl4A6JWAOca0ZS6H4fJw6EtJkQO8AF0TMAeEy1wOz7kIl5kc4AXoXvUBI1zmkt0B3SG5ewWge9UGjHCZi3BZmPURQB+qCxjhMpfiw6Wrh9hZHwH0o5qAES5zKT5cJrp6iJ31EUA/ig8Y4TKv2p7l0sXj562PAPpSbMAIl7l5lksk1kcA/SkuYITL3NwSHZn1EUB/igkY4TK3as659Mv6CKBP2QeMcJmbcDnQxR1I1kcA/co2YD59/4Ptp4++FS5zqe2A7uni34HU7m5ubvr6AvQoy4B5cO3G9tNH394a+joy4IDuVHHvQDJ9AehfVgFjXTQ3B3R75PAuQP+yCBjhMjfnXM4Q//yLw7sAQ0g6YITLIpxzmUfs8y/WRwDDSDJghMtCnHNZSMzzLw7vAgwlqYARLgtxzmVBsddHpi8Aw0kiYNwSvSjromXEXR+ZvgAMafCAcUv0QqyLlnQwfYkWyCsrl01fAAY0WMBYFy3EuuicYk5fmibsbGzcFZEAA+o9YITLoqyL4oh1eNfqCCAFvQWMcFmYdVEkMQ/vOrgLkIZeAuYgXpxzmY91UWSx1kdNE3Y8dRcgDTE/0e6Ew6lLvMOTZbMuiu1g+hIhntvdra3Nj2JcEwDn18kExrpoYdZFHYk3fbE6AkhJ9AmMddFCfHZRh2JNX6yOANITLWCsixZlXdSl9fU72/v7T8QLQKHOvUKyLlqYqUsP9vcfR1gduWUaIFURzsCYuszP1KUPsZ6662m7AOmKskKyPjqTQ7o9sToCqEOUu5AmUwUhc4JnuvQsxupIvACkr5PnwAiZYF00gBh3HYkXgDx0+iC7UGfMOKQ7APECUJfOA2aijpAxdRmCeAGoT28BM1FoyJi6DES8ANSp94CZKCdkTF2GIl4A6jVYwExkHDKmLgMSLwB1GzxgJvL6DCVTlyGJFwCSCZgQQvj0/Q+2nz76NuVpjKnLwM4fL+3uysrlvY2Nu76HABlLKmAm0lwrmboM7bzxYuoCUI4kA2YikbWSqcvAxh8P8PjNEJqlg1a8AJQl6YAJg0eMqcvQnHcBYJrkAyYMdjZGvAzNeRcAZskiYCZ6msb45OiBjcOltTICYKasAiZ0HjGmLkOKES4htLtN0+yJF4CyZRcwoZuIMXUZmLMuACziwtAXsIwPH/72dryIOZi6PIxxZSzrYPKy7D9t6gJQmSwnMBMHh3uXjRi3RydmdXWtXfSfqWXqsrn9T+NnI7UpPRupQM34dWF0++Pif6Ygd1kHTFh6neSsS4pWV0f3Fzn/srLy8s6QdxiJChYmkCCa7AMmLBwx4iVV856DWVlZCT/72Z+GW7f+orOfX3FCUoQPnFBEwIT5IsZB3QycNoVZWVkJ7/3+e+Hjj38Rfve7/w1Pnuzv/Mkf//R2EBwgcqhOMQETTo0YU5dcTJvCvPTSS+FH770Xfvij98JLL7003MVBzgQOhSkqYEII4cG1d48dBBUvuZkc5r1y5Ur44XvvhevX3xYuEJugIXNZ3kZ9mhevvLJz8LEDwV1GefrDH/84XL/+dlhZWRn6UqBcbbgZQhs2/+Ef29FfdneeDLrih5aktG273TSNcy3QNRMYMidgyIqogSUJFgojYCiGuKFqAoXKCBiqJXhIniiBmQQMLEkAcSYBAp0RMJABsRSJoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADI2v8D70vDFkXhZwgAAAAASUVORK5CYII="/>
      {/* <p className="text-[20px]">JAPAN SYSTEM (THAILAND) CO.LTD.</p>
      <p className="text-[18px]">สาขาสุพรรณบุรี</p> */}
    </div>
  );
}
